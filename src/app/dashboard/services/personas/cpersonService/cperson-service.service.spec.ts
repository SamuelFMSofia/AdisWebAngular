import { TestBed } from '@angular/core/testing';

import { CpersonServiceService } from './cperson-service.service';

describe('CpersonServiceService', () => {
  let service: CpersonServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CpersonServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
