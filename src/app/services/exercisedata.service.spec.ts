import { TestBed } from '@angular/core/testing';

import { ExercisedataService } from './exercisedata.service';

describe('ExercisedataService', () => {
  let service: ExercisedataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExercisedataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
