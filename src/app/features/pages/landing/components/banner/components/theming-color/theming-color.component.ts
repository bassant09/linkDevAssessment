import { CommonModule } from '@angular/common';
import { Component, Inject, Input, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-theming-color',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './theming-color.component.html',
  styleUrl: './theming-color.component.scss'
})
export class ThemingColorComponent {
@Input() themeColor:string='F215B6'
constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

getThemeColor(): string {
  if (isPlatformBrowser(this.platformId)) {
    const root = document.documentElement; 
    return getComputedStyle(root).getPropertyValue('--theme-color').trim();
  }
  return '#000000';
}
}
