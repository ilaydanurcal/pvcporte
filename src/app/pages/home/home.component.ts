import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { LanguageService } from '../../services/language.service';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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

  updateSEO(): void {
    const lang = this.languageService.getCurrentLanguageValue();
    
    const titles: Record<string, string> = {
      tr: 'OBSAN SUARL | Türkiye\'den Afrika\'ya Çelik, PVC, Lake ve Melamin Kapı İhracatı',
      en: 'OBSAN SUARL | Steel, PVC, Lacquered & Melamine Door Export from Turkey to Africa',
      fr: 'OBSAN SUARL | Export de Portes en Acier, PVC, Laquées et Mélaminées de la Turquie vers l\'Afrique',
      ar: 'OBSAN SUARL | تصدير الأبواب الفولاذية وPVC واللاكيه والميلامين من تركيا إلى أفريقيا'
    };

    const descriptions: Record<string, string> = {
      tr: 'OBSAN SUARL, Türkiye\'de üretilen çelik, PVC, lake, melamin ve panel kapıları Afrika ve yurt dışına ihraç eder. Toptan kapı tedariki, hızlı üretim, güvenli lojistik ve proje desteği.',
      en: 'OBSAN SUARL exports steel, PVC, lacquered, melamine and panel doors manufactured in Turkey to Africa and abroad. Wholesale door supply, fast production, secure logistics and project support.',
      fr: 'OBSAN SUARL exporte des portes en acier, PVC, laquées, mélaminées et à panneaux fabriquées en Turquie vers l\'Afrique et l\'étranger. Approvisionnement en portes en gros, production rapide, logistique sécurisée et soutien aux projets.',
      ar: 'OBSAN SUARL تصدر الأبواب الفولاذية وPVC واللاكيه والميلامين والبانل المصنعة في تركيا إلى أفريقيا والخارج. توريد الأبواب بالجملة، إنتاج سريع، لوجستيات آمنة ودعم المشاريع.'
    };

    this.titleService.setTitle(titles[lang] || titles['tr']);
    this.metaService.updateTag({ name: 'description', content: descriptions[lang] || descriptions['tr'] });
    this.metaService.updateTag({ property: 'og:title', content: titles[lang] || titles['tr'] });
    this.metaService.updateTag({ property: 'og:description', content: descriptions[lang] || descriptions['tr'] });
    this.metaService.updateTag({ property: 'og:type', content: 'website' });
    this.metaService.updateTag({ property: 'og:url', content: 'https://www.pvcporte.com/' });
    this.metaService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.metaService.updateTag({ name: 'twitter:title', content: titles[lang] || titles['tr'] });
    this.metaService.updateTag({ name: 'twitter:description', content: descriptions[lang] || descriptions['tr'] });
    this.metaService.updateTag({ name: 'twitter:url', content: 'https://www.pvcporte.com/' });
  }

  onImageError(event: Event): void {
    const img = event.target as HTMLImageElement;
    img.src = 'assets/images/OS-001.png';
  }
}
