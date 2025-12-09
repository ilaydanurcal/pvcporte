import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { LanguageService } from '../../services/language.service';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  t: any;
  direction$: any;

  constructor(
    private titleService: Title,
    private metaService: Meta,
    private languageService: LanguageService,
    private i18nService: I18nService
  ) {
    this.direction$ = this.languageService.getDirection();
  }

  ngOnInit(): void {
    this.updateTranslations();
    this.languageService.getCurrentLanguage().subscribe(() => {
      this.updateTranslations();
      this.updateSEO();
    });
    this.updateSEO();
  }

  updateTranslations(): void {
    this.t = this.i18nService.getCurrentTranslation();
  }

  getCurrentLanguage(): string {
    return this.languageService.getCurrentLanguageValue();
  }
  
  getModelImage(code: string): string {
    // OS koduna göre resim yolu oluştur
    // Örnek: OS001 -> assets/images/OS-001.png
    // OS kodunu OS-XXX formatına çevir (OS001 -> OS-001)
    const formattedCode = code.replace(/(\d+)/, '-$1');
    return `assets/images/${formattedCode}.png`;
  }
  
  onImageError(event: Event): void {
    const img = event.target as HTMLImageElement;
    if (img) {
      img.src = 'assets/images/OS-001.png'; // Fallback to first image
    }
  }

  getShortDescription(model: any): string {
    if (!model) return '';
    const lang = this.getCurrentLanguage();
    let description = '';
    if (lang === 'tr') description = model.description;
    else if (lang === 'en') description = model.descriptionEn;
    else if (lang === 'fr') description = model.descriptionFr;
    else if (lang === 'ar') description = model.descriptionAr;
    else description = model.description;
    
    // Sadece ilk cümleyi al (nokta ile biten ilk cümle)
    const firstSentence = description.split('.')[0];
    return firstSentence ? firstSentence + '.' : description.substring(0, 120) + '...';
  }

  getModelFeatures(model: any): string[] {
    if (!model) return [];
    const lang = this.getCurrentLanguage();
    if (lang === 'en' && model.featuresEn) return model.featuresEn;
    if (lang === 'fr' && model.featuresFr) return model.featuresFr;
    if (lang === 'ar' && model.featuresAr) return model.featuresAr;
    return model.features || [];
  }

  updateSEO(): void {
    const lang = this.languageService.getCurrentLanguageValue();
    
    const titles: Record<string, string> = {
      tr: 'OBSAN SUARL | PVC Kapılar ve Modelleri - Afrika İhracatı',
      en: 'OBSAN SUARL | PVC Doors and Models - Export to Africa',
      fr: 'OBSAN SUARL | Portes PVC et Modèles - Export vers l\'Afrique',
      ar: 'OBSAN SUARL | أبواب PVC والموديلات - التصدير إلى أفريقيا'
    };

    const descriptions: Record<string, string> = {
      tr: 'OBSAN SUARL, PVC kapı üretimi ve ihracatı. PVC-001, PVC-002, PVC-003 ve daha fazla model. Afrika\'ya kapı ihracatı için geniş model yelpazesi. Toptan kapı tedariki için rekabetçi fiyatlar.',
      en: 'OBSAN SUARL, PVC door manufacturing and export. PVC-001, PVC-002, PVC-003 and more models. Wide model range for door export to Africa. Competitive prices for wholesale door supply.',
      fr: 'OBSAN SUARL, fabrication et export de portes PVC. PVC-001, PVC-002, PVC-003 et plus de modèles. Large gamme de modèles pour l\'export de portes vers l\'Afrique. Prix compétitifs pour l\'approvisionnement en portes en gros.',
      ar: 'OBSAN SUARL، تصنيع وتصدير أبواب PVC. PVC-001 وPVC-002 وPVC-003 والمزيد من الموديلات. مجموعة واسعة من الموديلات لتصدير الأبواب إلى أفريقيا. أسعار تنافسية لتوريد الأبواب بالجملة.'
    };

    this.titleService.setTitle(titles[lang] || titles['tr']);
    this.metaService.updateTag({ name: 'description', content: descriptions[lang] || descriptions['tr'] });
    this.metaService.updateTag({ property: 'og:title', content: titles[lang] || titles['tr'] });
    this.metaService.updateTag({ property: 'og:description', content: descriptions[lang] || descriptions['tr'] });
    this.metaService.updateTag({ property: 'og:url', content: 'https://www.pvcporte.com/products' });
  }
}
