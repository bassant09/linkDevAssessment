import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { EventEmitter } from 'node:stream';

@Component({
  selector: 'app-theming-color',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './theming-color.component.html',
  styleUrl: './theming-color.component.scss'
})
export class ThemingColorComponent {
@Input() themeColor:string='F215B6'
getThemeColor(): string {
  const root = document.documentElement;  // Get the root element (html)
  debugger
  return getComputedStyle(root).getPropertyValue('--theme-color').trim();
}
}
