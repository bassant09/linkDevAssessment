import { Component } from '@angular/core';
import { BannerComponent } from './components/banner/banner.component';
import { ThingsWeDoComponent } from './components/things-we-do/things-we-do.component';
import { LatestNewsComponent } from './components/latest-news/latest-news.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [BannerComponent,ThingsWeDoComponent,LatestNewsComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {

}
