import { TestBed } from '@angular/core/testing';

import { BannerSlidesService } from './banner-slides.service';

describe('BannerSlidesService', () => {
  let service: BannerSlidesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BannerSlidesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
