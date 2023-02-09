import { TestBed } from '@angular/core/testing';

import { WorkoutrecordService } from './workoutrecord.service';

describe('WorkoutrecordService', () => {
  let service: WorkoutrecordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkoutrecordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
