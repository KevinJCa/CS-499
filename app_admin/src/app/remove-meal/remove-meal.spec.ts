import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveMeal } from './remove-meal';

describe('RemoveMeal', () => {
  let component: RemoveMeal;
  let fixture: ComponentFixture<RemoveMeal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemoveMeal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemoveMeal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
