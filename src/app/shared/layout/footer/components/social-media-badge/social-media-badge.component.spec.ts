import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMediaBadgeComponent } from './social-media-badge.component';

describe('SocialMediaBadgeComponent', () => {
  let component: SocialMediaBadgeComponent;
  let fixture: ComponentFixture<SocialMediaBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialMediaBadgeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SocialMediaBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
