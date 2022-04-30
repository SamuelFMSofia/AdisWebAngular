import { TestBed } from '@angular/core/testing';

import { UpdateAService } from './updateA.service';

describe('UpdateAService', () => {
  let service: UpdateAService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateAService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
