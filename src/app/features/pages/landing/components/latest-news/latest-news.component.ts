import { Component } from '@angular/core';
import { NewsCardComponentComponent } from './components/news-card-component/news-card-component.component';
import { CommonModule } from '@angular/common';
import { NewsHeaderComponent } from "./components/news-header/news-header.component";
import { CustomButtonComponent } from "../../../../../shared/components/custom-button/custom-button.component";
import { LatestNewsService } from '../../../../../core/services/latest-news/latest-news.service';
import { News, NewsResponse } from '../../../../../core/models/news.Model';
import { HttpClientModule } from '@angular/common/http';
import { log } from 'node:console';
import { Category } from '../../../../../core/models/Category.Model';

@Component({
  selector: 'app-latest-news',
  standalone: true,
  imports: [CommonModule, NewsCardComponentComponent, NewsHeaderComponent, CustomButtonComponent],
  templateUrl: './latest-news.component.html',
  styleUrl: './latest-news.component.scss'
})
export class LatestNewsComponent {
  constructor(private _newsService: LatestNewsService) { }
  news: News[] = [];
  isError: boolean = false;
  isLoading: boolean = false;
  allNews: News[] = [];
  displayedNews: News[] = [];
  categoryData:Category[]=[]
  showAll: boolean = false
  ngOnInit(): void {
    this.fetchLatestNews();
    this.fetchCategorys()
  }

  fetchLatestNews() {
    if (this.isLoading) return;
    this.isError = false;
    this.isLoading = true;
    this._newsService.getLatestNews().subscribe({
      next: (data) => {
        this.isLoading = false;
        this.allNews = data?.News.filter(
          (item) => item.showOnHomepage === 'yes'
        );
        
        this.displayedNews = this.allNews.slice(0, 6);
        console.log('News data fetched successfully:', this.allNews);
      },
      error: (error) => {
        this.isLoading = false;
        this.isError = true;
      },
    });
  }
  fetchCategorys() {
    if (this.isLoading) return;
    this.isError = false;
    this.isLoading = true;
    this._newsService.getCategorys().subscribe({
      next: (data) => {
        this.isLoading = false;
        const allNewsCategory = { id: '0', name: 'All News' };

      this.categoryData=[allNewsCategory, ...data?.newsCategory];
        console.log('News data fetched successfully:', this.categoryData);
      },
      error: (error) => {
        this.isLoading = false;
        this.isError = true;
      },
    });
  }
  showAllNews() {
    if (this.showAll) return
    this.displayedNews = this.allNews
    this.showAll = true
  }
  filterByCategory(id:string){
    if(id=='0'){ this.displayedNews = this.allNews; return}
        this.displayedNews=this.allNews.filter(item=>  item.categoryID==id)
  }
}

