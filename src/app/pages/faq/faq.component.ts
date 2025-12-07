import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { LanguageService } from '../../services/language.service';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-faq',
  standalone: false,
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
  t: any;
  direction$: any;
  openIndex: number | null = null;

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

  toggleQuestion(index: number): void {
    this.openIndex = this.openIndex === index ? null : index;
  }

  updateSEO(): void {
    const lang = this.languageService.getCurrentLanguageValue();
    
    const titles: Record<string, string> = {
      tr: 'OBSAN SUARL | Sıkça Sorulan Sorular - Afrika Kapı İhracatı',
      en: 'OBSAN SUARL | Frequently Asked Questions - Door Export to Africa',
      fr: 'OBSAN SUARL | Questions Fréquemment Posées - Export de Portes vers l\'Afrique',
      ar: 'OBSAN SUARL | الأسئلة الشائعة - تصدير الأبواب إلى أفريقيا'
    };

    const descriptions: Record<string, string> = {
      tr: 'OBSAN SUARL Afrika kapı ihracatı hakkında sıkça sorulan sorular. Minimum sipariş, teslim süresi, ödeme yöntemleri ve lojistik bilgileri.',
      en: 'Frequently asked questions about OBSAN SUARL door export to Africa. Minimum order, delivery time, payment methods and logistics information.',
      fr: 'Questions fréquemment posées sur l\'export de portes OBSAN SUARL vers l\'Afrique. Commande minimum, délai de livraison, méthodes de paiement et informations logistiques.',
      ar: 'الأسئلة الشائعة حول تصدير الأبواب من OBSAN SUARL إلى أفريقيا. الحد الأدنى للطلب، وقت التسليم، طرق الدفع ومعلومات اللوجستيات.'
    };

    this.titleService.setTitle(titles[lang] || titles['tr']);
    this.metaService.updateTag({ name: 'description', content: descriptions[lang] || descriptions['tr'] });
    this.metaService.updateTag({ property: 'og:title', content: titles[lang] || titles['tr'] });
    this.metaService.updateTag({ property: 'og:description', content: descriptions[lang] || descriptions['tr'] });
    this.metaService.updateTag({ property: 'og:url', content: 'https://www.pvcporte.com/faq' });
  }
}
