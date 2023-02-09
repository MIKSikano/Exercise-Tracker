import { TestBed } from '@angular/core/testing';

import { ExercisetypeService } from './exercisetype.service';

describe('ExercisetypeService', () => {
  let service: ExercisetypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExercisetypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
