import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-hero-section',
  standalone: false,
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css']
})
export class HeroSectionComponent implements OnInit {
  t: any;
  direction$: any;

  constructor(
    private languageService: LanguageService,
    private i18nService: I18nService
  ) {
    this.direction$ = this.languageService.getDirection();
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

  onImageError(event: Event): void {
    const img = event.target as HTMLImageElement;
    img.src = 'assets/images/OS010.jpeg';
  }
}
