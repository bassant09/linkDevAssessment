import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThingsWeDoItemsComponent } from './things-we-do-items.component';

describe('ThingsWeDoItemsComponent', () => {
  let component: ThingsWeDoItemsComponent;
  let fixture: ComponentFixture<ThingsWeDoItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThingsWeDoItemsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThingsWeDoItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
