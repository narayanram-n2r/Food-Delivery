import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodpageComponent } from './foodpage.component';

describe('FoodpageComponent', () => {
  let component: FoodpageComponent;
  let fixture: ComponentFixture<FoodpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
