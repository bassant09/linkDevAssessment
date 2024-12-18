import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsCardComponentComponent } from './news-card-component.component';

describe('NewsCardComponentComponent', () => {
  let component: NewsCardComponentComponent;
  let fixture: ComponentFixture<NewsCardComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsCardComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewsCardComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
