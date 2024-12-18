import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { SlideBannerResponse } from '../../models/slide-banner.Model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BannerSlidesService {
private apiUrl = `${environment.apiUrl}`;

  constructor(private http: HttpClient) {}
   getSlidesBanner(): Observable<SlideBannerResponse> {
      return this.http.get<SlideBannerResponse>(this.apiUrl+'/fee177346e7875554413');  
    }
}
