import { TestBed } from '@angular/core/testing';

import { ListAService } from './listA.service';

describe('ListAService', () => {
  let service: ListAService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListAService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
