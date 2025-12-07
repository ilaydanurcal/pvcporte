import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { LanguageService } from '../../services/language.service';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
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
      tr: 'OBSAN SUARL | Hakkımızda - Afrika Kapı İhracatında Güvenilir Partner',
      en: 'OBSAN SUARL | About Us - Trusted Partner in Door Export to Africa',
      fr: 'OBSAN SUARL | À Propos - Partenaire de Confiance pour l\'Export de Portes vers l\'Afrique',
      ar: 'OBSAN SUARL | عنا - شريك موثوق في تصدير الأبواب إلى أفريقيا'
    };

    const descriptions: Record<string, string> = {
      tr: 'OBSAN SUARL, Türkiye\'den Afrika\'ya kapı ihracatında 20+ yıllık deneyim. Kaliteli üretim, güvenilir lojistik ve müşteri odaklı hizmet. Toptan kapı tedariki için profesyonel çözümler.',
      en: 'OBSAN SUARL, 20+ years of experience in door export from Turkey to Africa. Quality manufacturing, reliable logistics and customer-focused service. Professional solutions for wholesale door supply.',
      fr: 'OBSAN SUARL, plus de 20 ans d\'expérience dans l\'export de portes de la Turquie vers l\'Afrique. Fabrication de qualité, logistique fiable et service axé sur le client. Solutions professionnelles pour l\'approvisionnement en portes en gros.',
      ar: 'OBSAN SUARL، أكثر من 20 عاماً من الخبرة في تصدير الأبواب من تركيا إلى أفريقيا. تصنيع عالي الجودة، لوجستيات موثوقة وخدمة تركز على العملاء. حلول احترافية لتوريد الأبواب بالجملة.'
    };

    this.titleService.setTitle(titles[lang] || titles['tr']);
    this.metaService.updateTag({ name: 'description', content: descriptions[lang] || descriptions['tr'] });
    this.metaService.updateTag({ property: 'og:title', content: titles[lang] || titles['tr'] });
    this.metaService.updateTag({ property: 'og:description', content: descriptions[lang] || descriptions['tr'] });
    this.metaService.updateTag({ property: 'og:url', content: 'https://www.pvcporte.com/about' });
  }
}
