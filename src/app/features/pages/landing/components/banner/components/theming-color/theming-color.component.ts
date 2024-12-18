import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-theming-color',
  standalone: true,
  imports: [],
  templateUrl: './theming-color.component.html',
  styleUrl: './theming-color.component.scss'
})
export class ThemingColorComponent {
@Input() themeColor:string='F215B6'
}
