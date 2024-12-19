import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/layout/navbar/navbar.component';
import { FooterComponent } from "./shared/layout/footer/footer.component";

import { LatestNewsComponent } from './features/pages/landing/components/latest-news/latest-news.component';
import { BannerComponent } from "./features/pages/landing/components/banner/banner.component";
import { ThingsWeDoComponent } from "./features/pages/landing/components/things-we-do/things-we-do.component";
import { ScrollUpBtnComponent } from './shared/components/scroll-up-btn/scroll-up-btn.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, LatestNewsComponent, BannerComponent, ThingsWeDoComponent,ScrollUpBtnComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'linkDevTask';
}
