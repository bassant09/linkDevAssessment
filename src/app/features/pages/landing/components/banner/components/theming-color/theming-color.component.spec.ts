import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemingColorComponent } from './theming-color.component';

describe('ThemingColorComponent', () => {
  let component: ThemingColorComponent;
  let fixture: ComponentFixture<ThemingColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThemingColorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThemingColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
