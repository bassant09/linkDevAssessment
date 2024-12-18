import { Component, Input } from '@angular/core';
import { FooterItem } from '../../../../../core/models/footer-item.Model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer-item.component.html',
  styleUrl: './footer-item.component.scss'
})
export class FooterItemComponent {
  @Input() footerItem!: FooterItem;
}
