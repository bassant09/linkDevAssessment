import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor(@Inject(PLATFORM_ID) private platformId: object) { }

  setThemeColor(color: string): void {
    if (isPlatformBrowser(this.platformId)) {
      document.documentElement.style.setProperty('--theme-color', `#${color}`);
    }
  }

  getThemeColor(): string | null {
    if (isPlatformBrowser(this.platformId)) {
      return getComputedStyle(document.documentElement).getPropertyValue('--theme-color').trim();
    }
    return '#F215B6';
  }
}
