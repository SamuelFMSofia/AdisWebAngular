import { TestBed } from '@angular/core/testing';

import { MusersServiceService } from './musers-service.service';

describe('MusersServiceService', () => {
  let service: MusersServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MusersServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
