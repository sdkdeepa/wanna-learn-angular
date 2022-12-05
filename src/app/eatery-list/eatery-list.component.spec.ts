import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EateryListComponent } from './eatery-list.component';

describe('EateryListComponent', () => {
  let component: EateryListComponent;
  let fixture: ComponentFixture<EateryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EateryListComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EateryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
