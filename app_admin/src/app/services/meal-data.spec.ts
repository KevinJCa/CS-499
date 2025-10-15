import { TestBed } from '@angular/core/testing';
import { MealData } from './meal-data';

describe('MealData', () => {
  let service: MealData;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MealData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
