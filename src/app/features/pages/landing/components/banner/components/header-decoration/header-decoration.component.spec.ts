import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderDecorationComponent } from './header-decoration.component';

describe('HeaderDecorationComponent', () => {
  let component: HeaderDecorationComponent;
  let fixture: ComponentFixture<HeaderDecorationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderDecorationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderDecorationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
