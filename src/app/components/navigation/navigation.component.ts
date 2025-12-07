import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../../services/language.service';
import { I18nService } from '../../services/i18n.service';
import { AnimationService } from '../../services/animation.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-navigation',
  standalone: false,
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit, OnDestroy {
  isOpen = false;
  isLangDropdownOpen = false;
  direction$: Observable<'ltr' | 'rtl'>;
  t: any;
  isAnimationComplete = false; // Başlangıçta false - animasyon bitene kadar gizli
  private animationSubscription?: Subscription;

  navItems: Array<{ label: string; href: string }> = [];
  
  languages: Array<{ code: 'tr' | 'en' | 'fr' | 'ar'; name: string; flag: string; country: string }> = [
    { code: 'tr', name: 'Türkçe', flag: '/assets/images/tr.png', country: 'Türkiye' },
    { code: 'en', name: 'English', flag: 'assets/images/en.svg', country: 'United Kingdom' },
    { code: 'fr', name: 'Français', flag: 'assets/images/fr.png', country: 'France' },
    { code: 'ar', name: 'العربية', flag: 'assets/images/arap.png', country: 'Saudi Arabia' }
  ];

  constructor(
    private languageService: LanguageService,
    private i18nService: I18nService,
    private animationService: AnimationService
  ) {
    this.direction$ = this.languageService.getDirection();
  }

  ngOnInit(): void {
    this.updateTranslations();
    this.languageService.getCurrentLanguage().subscribe(() => {
      this.updateTranslations();
    });
    
    // Animasyon durumunu dinle
    this.animationSubscription = this.animationService.isAnimationComplete$.subscribe(
      (complete) => {
        this.isAnimationComplete = complete;
      }
    );
    
    // İlk durumu kontrol et
    this.isAnimationComplete = this.animationService.getAnimationComplete();
  }

  ngOnDestroy(): void {
    if (this.animationSubscription) {
      this.animationSubscription.unsubscribe();
    }
  }

  updateTranslations(): void {
    this.t = this.i18nService.getCurrentTranslation();
    this.navItems = [
      { label: this.t.nav.home, href: '/' },
      { label: this.t.nav.products, href: '/products' },
      { label: this.t.nav.process, href: '/process' },
      { label: this.t.nav.whyUs, href: '/about' },
      { label: this.t.nav.faq, href: '/faq' },
    ];
  }

  setLanguage(lang: 'tr' | 'en' | 'fr' | 'ar'): void {
    this.languageService.setLanguage(lang);
    this.isLangDropdownOpen = false;
  }
  
  toggleLangDropdown(): void {
    this.isLangDropdownOpen = !this.isLangDropdownOpen;
  }
  
  getCurrentLanguageName(): string {
    const lang = this.getCurrentLanguage();
    const langObj = this.languages.find(l => l.code === lang);
    return langObj ? langObj.name : 'TR';
  }
  
  getCurrentLanguageFlag(): string {
    const lang = this.getCurrentLanguage();
    const langObj = this.languages.find(l => l.code === lang);
    return langObj ? langObj.flag : '🇹🇷';
  }
  
  getCurrentLanguageCountry(): string {
    const lang = this.getCurrentLanguage();
    const langObj = this.languages.find(l => l.code === lang);
    return langObj ? langObj.country : 'Türkiye';
  }

  getCurrentLanguage(): string {
    return this.languageService.getCurrentLanguageValue();
  }

  toggleMenu(): void {
    this.isOpen = !this.isOpen;
    // Body scroll'u engelle/etkinleştir
    if (this.isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  closeMenu(): void {
    this.isOpen = false;
    document.body.style.overflow = '';
  }
  
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (!target.closest('.language-dropdown')) {
      this.isLangDropdownOpen = false;
    }
  }
}
