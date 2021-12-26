import { TestBed } from '@angular/core/testing';

import { MpersonServiceService } from './mperson-service.service';

describe('MpersonServiceService', () => {
  let service: MpersonServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MpersonServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
