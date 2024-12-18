import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopNavDecorationComponent } from './top-nav-decoration.component';

describe('TopNavDecorationComponent', () => {
  let component: TopNavDecorationComponent;
  let fixture: ComponentFixture<TopNavDecorationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopNavDecorationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopNavDecorationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
