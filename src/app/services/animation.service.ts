import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimationService {
  private isAnimationCompleteSubject = new BehaviorSubject<boolean>(false);
  public isAnimationComplete$: Observable<boolean> = this.isAnimationCompleteSubject.asObservable();

  setAnimationComplete(complete: boolean): void {
    this.isAnimationCompleteSubject.next(complete);
  }

  getAnimationComplete(): boolean {
    return this.isAnimationCompleteSubject.value;
  }
}


