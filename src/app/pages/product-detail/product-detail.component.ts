import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { LanguageService } from '../../services/language.service';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  t: any;
  direction$: any;
  model: any = null;
  modelCode: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private titleService: Title,
    private metaService: Meta,
    private languageService: LanguageService,
    private i18nService: I18nService
  ) {
    this.direction$ = this.languageService.getDirection();
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.modelCode = params['code'];
      this.loadModel();
    });
    
    this.updateTranslations();
    this.languageService.getCurrentLanguage().subscribe(() => {
      this.updateTranslations();
      this.loadModel();
      this.updateSEO();
    });
  }

  updateTranslations(): void {
    this.t = this.i18nService.getCurrentTranslation();
  }

  loadModel(): void {
    if (!this.t?.products?.categories?.models) return;
    
    this.model = this.t.products.categories.models.find((m: any) => m.code === this.modelCode);
    
    if (!this.model) {
      // Model bulunamazsa products sayfasına yönlendir
      this.router.navigate(['/products']);
      return;
    }
    
    this.updateSEO();
  }

  getCurrentLanguage(): string {
    return this.languageService.getCurrentLanguageValue();
  }

  getModelImage(code: string): string {
    return `assets/images/${code}.jpeg`;
  }

  onImageError(event: Event): void {
    const img = event.target as HTMLImageElement;
    if (img) {
      img.src = 'assets/images/OS001.jpeg';
    }
  }

  updateSEO(): void {
    if (!this.model) return;
    
    const lang = this.languageService.getCurrentLanguageValue();
    const modelName = this.getModelName();
    const modelDesc = this.getModelDescription();

    const titles: Record<string, string> = {
      tr: `OBSAN SUARL | ${modelName} - PVC Kapı Detayları`,
      en: `OBSAN SUARL | ${modelName} - PVC Door Details`,
      fr: `OBSAN SUARL | ${modelName} - Détails de Porte PVC`,
      ar: `OBSAN SUARL | ${modelName} - تفاصيل باب PVC`
    };

    const descriptions: Record<string, string> = {
      tr: `${modelDesc} OBSAN SUARL PVC kapı modelleri. Afrika'ya kapı ihracatı için profesyonel çözümler.`,
      en: `${modelDesc} OBSAN SUARL PVC door models. Professional solutions for door export to Africa.`,
      fr: `${modelDesc} Modèles de portes PVC OBSAN SUARL. Solutions professionnelles pour l'export de portes vers l'Afrique.`,
      ar: `${modelDesc} موديلات أبواب PVC من OBSAN SUARL. حلول احترافية لتصدير الأبواب إلى أفريقيا.`
    };

    this.titleService.setTitle(titles[lang] || titles['tr']);
    this.metaService.updateTag({ name: 'description', content: descriptions[lang] || descriptions['tr'] });
    this.metaService.updateTag({ property: 'og:title', content: titles[lang] || titles['tr'] });
    this.metaService.updateTag({ property: 'og:description', content: descriptions[lang] || descriptions['tr'] });
    this.metaService.updateTag({ property: 'og:url', content: `https://www.pvcporte.com/products/${this.modelCode}` });
  }

  getModelName(): string {
    if (!this.model) return '';
    const lang = this.getCurrentLanguage();
    if (lang === 'tr') return this.model.name;
    if (lang === 'en') return this.model.nameEn;
    if (lang === 'fr') return this.model.nameFr;
    if (lang === 'ar') return this.model.nameAr;
    return this.model.name;
  }

  getModelDescription(): string {
    if (!this.model) return '';
    const lang = this.getCurrentLanguage();
    if (lang === 'tr') return this.model.description;
    if (lang === 'en') return this.model.descriptionEn;
    if (lang === 'fr') return this.model.descriptionFr;
    if (lang === 'ar') return this.model.descriptionAr;
    return this.model.description;
  }

  getWhatsAppLink(): string {
    if (!this.model) return 'https://wa.me/905321307143';
    const message = `Merhaba, ${this.model.code} modeli hakkında bilgi almak istiyorum.`;
    return `https://wa.me/905321307143?text=${encodeURIComponent(message)}`;
  }
}
