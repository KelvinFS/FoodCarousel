import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodcheckboxComponent } from './foodcheckbox.component';

describe('FoodcheckboxComponent', () => {
  let component: FoodcheckboxComponent;
  let fixture: ComponentFixture<FoodcheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodcheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodcheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
