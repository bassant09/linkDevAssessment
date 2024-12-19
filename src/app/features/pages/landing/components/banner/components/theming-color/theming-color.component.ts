import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ThemeService } from '../../../../../../../core/services/theme/theme.service';

@Component({
  selector: 'app-theming-color',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './theming-color.component.html',
  styleUrl: './theming-color.component.scss'
})
export class ThemingColorComponent {
  @Input() themeColor: string = 'F215B6'
  constructor(private _themeService: ThemeService) { }

  getThemeColor(): string | null {
    return this._themeService.getThemeColor()
  }
}
