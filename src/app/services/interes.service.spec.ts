import { TestBed } from '@angular/core/testing';

import { InteresService } from './interes.service';

describe('InteresService', () => {
  let service: InteresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InteresService);
  });

  xit('should be created', () => {
    expect(service).toBeTruthy();
  });
});
