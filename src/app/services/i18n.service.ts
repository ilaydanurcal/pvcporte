import { Injectable } from '@angular/core';
import { Language } from '../models/language.model';
import { translations } from '../data/translations';
import { LanguageService } from './language.service';

@Injectable({
  providedIn: 'root'
})
export class I18nService {

  constructor(private languageService: LanguageService) {}

  getTranslation(lang?: Language): any {
    const language = lang || this.languageService.getCurrentLanguageValue();
    return translations[language] || translations['tr'];
  }

  getCurrentTranslation(): any {
    return this.getTranslation();
  }
}
