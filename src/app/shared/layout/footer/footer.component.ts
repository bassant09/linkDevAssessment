import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FooterItem } from '../../../core/models/footer-item.Model';
import { FooterItemComponent } from './components/footer-item/footer-item.component';
import { SocialMediaBadgeComponent } from './components/social-media-badge/social-media-badge.component';
import { socialMediaItem } from '../../../core/models/social-media.Model';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule,FooterItemComponent,SocialMediaBadgeComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  constructor( private sanitizer: DomSanitizer){}
  footerItems: FooterItem[] = [
    {
      title: 'Company',
      links: ['FAQ', 'Help Center', 'Privacy ']
    },
    {
      title: 'Resources',
      links: ['Blog', 'Documentation', 'Community']
    },
    {
      title: 'Contact',
      links: ['Email Us', 'Support', 'Sales']
    }
  ];
  socialMediaItems: socialMediaItem[] = [
    {
      svg: this.sanitizer.bypassSecurityTrustHtml(`<svg width="7" height="14" viewBox="0 0 7 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.10837 2.81233C5.78831 2.71108 5.42024 2.64357 5.08417 2.64357C4.66809 2.64357 3.77191 2.93046 3.77191 3.48736V4.82053H5.90033V7.06499H3.77191V13.2583H1.6275V7.06499H0.571289V4.82053H1.6275V3.68986C1.6275 1.98542 2.36364 0.567871 4.13999 0.567871C4.7481 0.567871 5.83632 0.601622 6.42843 0.821006L6.10837 2.81233Z" fill="#080809"/>
            </svg>`),
      link: 'https://www.example.com'
    },
    {
      svg: this.sanitizer.bypassSecurityTrustHtml(`<svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.6562 0.567871H2.34375C1.05156 0.567871 0 1.61943 0 2.91162V14.2241C0 15.5166 1.05156 16.5679 2.34375 16.5679H13.6562C14.9487 16.5679 16 15.5166 16 14.2241V2.91162C16 1.61943 14.9487 0.567871 13.6562 0.567871ZM15.0625 14.2241C15.0625 14.9994 14.4316 15.6304 13.6562 15.6304H2.34375C1.56844 15.6304 0.9375 14.9994 0.9375 14.2241V2.91162C0.9375 2.13631 1.56844 1.50537 2.34375 1.50537H13.6562C14.4316 1.50537 15.0625 2.13631 15.0625 2.91162V14.2241Z" fill="black"/>
<path d="M13.1562 2.47412C12.6394 2.47412 12.2188 2.89475 12.2188 3.41162C12.2188 3.9285 12.6394 4.34912 13.1562 4.34912C13.6731 4.34912 14.0938 3.9285 14.0938 3.41162C14.0938 2.89475 13.6731 2.47412 13.1562 2.47412Z" fill="black"/>
<path d="M8 4.34912C5.67375 4.34912 3.78125 6.24162 3.78125 8.56787C3.78125 10.8941 5.67375 12.7866 8 12.7866C10.3263 12.7866 12.2188 10.8941 12.2188 8.56787C12.2188 6.24162 10.3263 4.34912 8 4.34912ZM8 11.8491C6.19062 11.8491 4.71875 10.3772 4.71875 8.56787C4.71875 6.7585 6.19062 5.28662 8 5.28662C9.80937 5.28662 11.2812 6.7585 11.2812 8.56787C11.2812 10.3772 9.80937 11.8491 8 11.8491Z" fill="black"/>
</svg>
`),
      link: 'https://www.another-example.com'
    },
    {
      svg: this.sanitizer.bypassSecurityTrustHtml(`<svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 2.10687C15.405 2.36787 14.771 2.54087 14.11 2.62487C14.79 2.21887 15.309 1.58087 15.553 0.811871C14.919 1.18987 14.219 1.45687 13.473 1.60587C12.871 0.964871 12.013 0.567871 11.077 0.567871C9.261 0.567871 7.799 2.04187 7.799 3.84887C7.799 4.10887 7.821 4.35887 7.875 4.59687C5.148 4.46387 2.735 3.15687 1.114 1.16587C0.831 1.65687 0.665 2.21887 0.665 2.82387C0.665 3.95987 1.25 4.96687 2.122 5.54987C1.595 5.53987 1.078 5.38687 0.64 5.14587C0.64 5.15587 0.64 5.16887 0.64 5.18187C0.64 6.77587 1.777 8.09987 3.268 8.40487C3.001 8.47787 2.71 8.51287 2.408 8.51287C2.198 8.51287 1.986 8.50087 1.787 8.45687C2.212 9.75587 3.418 10.7109 4.852 10.7419C3.736 11.6149 2.319 12.1409 0.785 12.1409C0.516 12.1409 0.258 12.1289 0 12.0959C1.453 13.0329 3.175 13.5679 5.032 13.5679C11.068 13.5679 14.368 8.56787 14.368 4.23387C14.368 4.08887 14.363 3.94887 14.356 3.80987C15.007 3.34787 15.554 2.77087 16 2.10687Z" fill="#080809"/>
</svg>

`),
      link: 'https://www.another-example.com'
    }
    
  ];
}
