import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-scroll-up-btn',
  standalone: true,
  imports: [],
  templateUrl: './scroll-up-btn.component.html',
  styleUrl: './scroll-up-btn.component.scss'
})
export class ScrollUpBtnComponent {
  showScrollButton = false;


  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  }
}
