import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LanguageService } from '../../services/language.service';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  direction$: Observable<'ltr' | 'rtl'>;
  t: any;
  currentYear: number;

  constructor(
    private languageService: LanguageService,
    private i18nService: I18nService
  ) {
    this.direction$ = this.languageService.getDirection();
    this.currentYear = new Date().getFullYear();
  }

  ngOnInit(): void {
    this.updateTranslations();
    this.languageService.getCurrentLanguage().subscribe(() => {
      this.updateTranslations();
    });
  }

  updateTranslations(): void {
    this.t = this.i18nService.getCurrentTranslation();
  }

  getCurrentLanguage(): string {
    return this.languageService.getCurrentLanguageValue();
  }
}
