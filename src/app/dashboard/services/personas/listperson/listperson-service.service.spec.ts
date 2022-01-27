import { TestBed } from '@angular/core/testing';

import { ListpersonServiceService } from './listperson-service.service';

describe('ListpersonServiceService', () => {
  let service: ListpersonServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListpersonServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
