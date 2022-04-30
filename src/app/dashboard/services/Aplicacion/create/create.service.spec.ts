import { TestBed } from '@angular/core/testing';

import { CreateAService } from './createA.service';

describe('CreateService', () => {
  let service: CreateAService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateAService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
