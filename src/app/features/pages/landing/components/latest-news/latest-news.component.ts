import { ChangeDetectorRef, Component } from '@angular/core';
import { NewsCardComponentComponent } from './components/news-card-component/news-card-component.component';
import { CommonModule } from '@angular/common';
import { NewsHeaderComponent } from './components/news-header/news-header.component';
import { CustomButtonComponent } from '../../../../../shared/components/custom-button/custom-button.component';
import { LatestNewsService } from '../../../../../core/services/latest-news/latest-news.service';
import { News, NewsResponse } from '../../../../../core/models/news.Model';
import { HttpClientModule } from '@angular/common/http';
import { log } from 'node:console';
import { Category } from '../../../../../core/models/Category.Model';
import { EmptyStateComponent } from '../../../../../shared/states/empty-state/empty-state.component';
import { ErrorStateComponent } from '../../../../../shared/states/error-state/error-state.component';
import { LoadingStateComponent } from '../../../../../shared/states/loading-state/loading-state.component';
import { catchError, forkJoin, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-latest-news',
  standalone: true,
  imports: [
    CommonModule,
    NewsCardComponentComponent,
    NewsHeaderComponent,
    CustomButtonComponent,
    EmptyStateComponent,
    ErrorStateComponent,
    LoadingStateComponent,
  ],
  templateUrl: './latest-news.component.html',
  styleUrl: './latest-news.component.scss',
})
export class LatestNewsComponent {
  constructor(private _newsService: LatestNewsService) {}
  news: News[] = [];
  isLoading: boolean = false;
  isError: boolean = false;
  allNews: News[] = [];
  displayedNews: News[] = [];
  categoryData: Category[] = [];
  showAll: boolean = false;

  ngOnInit(): void {
    this.fetchData();
  }

 fetchData() {
    this.isLoading = true;
    this.isError = false;
    forkJoin([this.fetchCategories(), this.fetchLatestNews()]).subscribe({
      next: (res) => {
        this.isLoading = false;
      },
      error: (err) => {
        this.isLoading = false;
        this.isError = true;
      }
    });
  }

  fetchCategories() {
    return this._newsService.getCategories().pipe(
      tap((data) => {
        const allNewsCategory = { id: '0', name: 'All News' };

        this.categoryData = [allNewsCategory, ...data?.newsCategory];

        console.log('Categories fetched successfully:', this.categoryData);
      })
    );
  }

  fetchLatestNews() {
    return this._newsService.getLatestNews().pipe(
      tap((data) => {
        this.allNews = data?.News.filter(
          (item) => item.showOnHomepage === 'yes'
        ).map((news) => {
          const category = this.categoryData.find(
            (cat) => parseInt(cat.id) === parseInt(news.categoryID)
          );
          return { ...news, categoryName: category?.name || 'Unknown' };
        });

        this.displayedNews = this.allNews.slice(0, 6);
        console.log('News fetched successfully:', this.allNews);
      })
    );
  }

  showAllNews() {
    if (this.showAll) return;
    this.displayedNews = this.allNews;
    this.showAll = true;
  }

  filterByCategory(id: string) {
    if (id == '0') {
      this.displayedNews = this.allNews;
      return;
    }
    this.displayedNews = this.allNews.filter((item) => item.categoryID == id);
    console.log(this.displayedNews);
  }

  trackByNewsId(index: number, news: { id: string }): string {
    return news.id;
  }
}
