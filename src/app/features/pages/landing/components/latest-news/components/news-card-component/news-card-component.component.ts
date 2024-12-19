import { Component, Input } from '@angular/core';
import { News } from '../../../../../../../core/models/news.Model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-news-card-component',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './news-card-component.component.html',
  styleUrl: './news-card-component.component.scss'
})
export class NewsCardComponentComponent {
  @Input() newsItem!: News
  onImageError(event: any): void {
    event.target.src = 'assets/images/News-Placeholder.png';
  }
}
