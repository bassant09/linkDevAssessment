import { Component, Input } from '@angular/core';
import { socialMediaItem } from '../../../../../core/models/social-media.Model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-social-media-badge',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './social-media-badge.component.html',
  styleUrl: './social-media-badge.component.scss'
})
export class SocialMediaBadgeComponent {
  @Input() socialMediaItem!: socialMediaItem;
}
