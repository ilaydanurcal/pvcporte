import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Language } from '../models/language.model';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLanguage$ = new BehaviorSubject<Language>('tr');
  private direction$ = new BehaviorSubject<'ltr' | 'rtl'>('ltr');

  constructor() {
    // Load saved language from localStorage or default to Turkish
    const savedLang = localStorage.getItem('language') as Language;
    const language = (savedLang && ['tr', 'en', 'fr', 'ar'].includes(savedLang)) ? savedLang : 'tr';
    this.setLanguage(language);
  }

  getCurrentLanguage(): Observable<Language> {
    return this.currentLanguage$.asObservable();
  }

  getDirection(): Observable<'ltr' | 'rtl'> {
    return this.direction$.asObservable();
  }

  setLanguage(lang: Language): void {
    this.currentLanguage$.next(lang);
    localStorage.setItem('language', lang);
    
    // Set direction based on language
    const direction = lang === 'ar' ? 'rtl' : 'ltr';
    this.direction$.next(direction);
    
    // Update document direction
    document.documentElement.setAttribute('dir', direction);
    document.documentElement.setAttribute('lang', lang);
  }

  getCurrentLanguageValue(): Language {
    return this.currentLanguage$.value;
  }

  getDirectionValue(): 'ltr' | 'rtl' {
    return this.direction$.value;
  }
}
