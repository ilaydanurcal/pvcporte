import { Component, OnInit, OnDestroy } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { AnimationService } from '../../services/animation.service';

@Component({
  selector: 'app-door-animation',
  templateUrl: './door-animation.component.html',
  styleUrls: ['./door-animation.component.css']
})
export class DoorAnimationComponent implements OnInit, OnDestroy {
  isOpening = false;
  isAnimationComplete = false;
  private animationTimer: any;
  currentLanguage: string = 'tr';

  constructor(
    private languageService: LanguageService,
    private animationService: AnimationService
  ) {}

  ngOnInit(): void {
    this.currentLanguage = this.languageService.getCurrentLanguageValue();
    
    // Animasyon başlamadan önce header'ı gizle
    this.animationService.setAnimationComplete(false);
    
    // Sayfa yüklendiğinde kısa bir süre sonra kapı açılmaya başlar
    setTimeout(() => {
      this.isOpening = true;
      
      // Kapı açıldıktan sonra animasyonu tamamla
      this.animationTimer = setTimeout(() => {
        this.isAnimationComplete = true;
        this.animationService.setAnimationComplete(true);
      }, 1800); // 1.8 saniye sonra tamamen kaybolur
    }, 300); // 0.3 saniye bekle (render için)
  }

  ngOnDestroy(): void {
    if (this.animationTimer) {
      clearTimeout(this.animationTimer);
    }
  }

  getSubtitle(): string {
    const subtitles: Record<string, string> = {
      tr: 'PVC Kapı İhracatı',
      en: 'PVC Door Export',
      fr: 'Export de Portes PVC',
      ar: 'تصدير أبواب PVC'
    };
    return subtitles[this.currentLanguage] || subtitles['tr'];
  }
}
