import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { News, NewsResponse } from '../../models/news.Model';
import { environment } from '../../../../environments/environment';
import { CategorysResponse } from '../../models/Category.Model';

@Injectable({
  providedIn: 'root'
})
export class LatestNewsService {
  private apiUrl = `${environment.apiUrl}`;

  constructor(private http: HttpClient) {}
  getLatestNews(): Observable<NewsResponse> {
    return this.http.get<NewsResponse>(this.apiUrl+'/d275425a434e02acf2f7');  
  }
  getCategorys(): Observable<CategorysResponse> {
    return this.http.get<CategorysResponse>(this.apiUrl+'/91298d970c27e9a06518');  
  }
}
