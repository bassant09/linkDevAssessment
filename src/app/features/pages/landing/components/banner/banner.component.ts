import { Component } from '@angular/core';
import { HeaderDecorationComponent } from './components/header-decoration/header-decoration.component';
import { CustomButtonComponent } from '../../../../../shared/components/custom-button/custom-button.component';
import { ThemingColorComponent } from "./components/theming-color/theming-color.component";
import { BannerSlidesService } from '../../../../../core/services/banner/banner-slides.service';
import { BannerSlide } from '../../../../../core/models/slide-banner.Model';
import { log } from 'node:console';
import { TopNavDecorationComponent } from "./components/top-nav-decoration/top-nav-decoration.component";

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [HeaderDecorationComponent, CustomButtonComponent, ThemingColorComponent, TopNavDecorationComponent],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {
  isError: boolean = false;
  isLoading: boolean = false;
  slidesData:BannerSlide[]=[]
  selectedSlide!: BannerSlide 
  constructor(private _bannerSlides:BannerSlidesService){}
  ngOnInit(){
    this.fetchBannerSlides()
  }
  fetchBannerSlides() {
    if (this.isLoading) return;
    this.isError = false;
    this.isLoading = true;
    this._bannerSlides.getSlidesBanner().subscribe({
      next: (data) => {
        this.isLoading = false;
        this.slidesData=data.slides
        console.log(this.slidesData);
        
        if (this.slidesData && this.slidesData.length > 0) {
          this.selectedTheme(this.slidesData[1]);
        }
        
      },
      error: (error) => {
        this.isLoading = false;
        this.isError = true;
      },
    });
  }
  selectedTheme(slide: BannerSlide): void {
    this.selectedSlide = slide;
      document.documentElement.style.setProperty('--theme-color', `#${slide.colorCode}`);
    console.log('Selected Slide:', slide);
  }
  redirectToUrl(url: string): void {
    if (url) {
      window.open(url, '_blank');
    }
  }
}
