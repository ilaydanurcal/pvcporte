import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { LanguageService } from '../../services/language.service';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-process',
  standalone: false,
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.css']
})
export class ProcessComponent implements OnInit {
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

  updateSEO(): void {
    const lang = this.languageService.getCurrentLanguageValue();
    const translations = this.i18nService.getTranslation(lang);
    
    const titles: Record<string, string> = {
      tr: 'OBSAN SUARL | Sipariş ve Üretim Süreci - Afrika Kapı İhracatı',
      en: 'OBSAN SUARL | Order & Production Process - Door Export to Africa',
      fr: 'OBSAN SUARL | Processus de Commande et Production - Export de Portes vers l\'Afrique',
      ar: 'OBSAN SUARL | عملية الطلب والإنتاج - تصدير الأبواب إلى أفريقيا'
    };

    const descriptions: Record<string, string> = {
      tr: 'OBSAN SUARL sipariş ve üretim süreci: ihtiyaç analizi, teklif hazırlama, üretim ve lojistik. Afrika\'ya kapı ihracatı için profesyonel çözümler.',
      en: 'OBSAN SUARL order and production process: needs analysis, quote preparation, manufacturing, and logistics. Professional solutions for door export to Africa.',
      fr: 'Processus de commande et production OBSAN SUARL : analyse des besoins, préparation de devis, fabrication et logistique. Solutions professionnelles pour l\'export de portes vers l\'Afrique.',
      ar: 'عملية الطلب والإنتاج في OBSAN SUARL: تحليل الاحتياجات، إعداد العروض، التصنيع واللوجستيات. حلول احترافية لتصدير الأبواب إلى أفريقيا.'
    };

    this.titleService.setTitle(titles[lang] || titles['tr']);
    this.metaService.updateTag({ name: 'description', content: descriptions[lang] || descriptions['tr'] });
    this.metaService.updateTag({ property: 'og:title', content: titles[lang] || titles['tr'] });
    this.metaService.updateTag({ property: 'og:description', content: descriptions[lang] || descriptions['tr'] });
    this.metaService.updateTag({ property: 'og:url', content: 'https://www.pvcporte.com/process' });
  }
}

