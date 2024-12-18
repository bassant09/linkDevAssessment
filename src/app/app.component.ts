import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/layout/navbar/navbar.component';
import { FooterComponent } from "./shared/layout/footer/footer.component";

import { LatestNewsComponent } from './features/pages/landing/components/latest-news/latest-news.component';
import { BannerComponent } from "./features/pages/landing/components/banner/banner.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, LatestNewsComponent, BannerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'linkDevTask';
}
