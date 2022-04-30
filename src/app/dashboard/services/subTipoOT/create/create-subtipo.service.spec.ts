import { TestBed } from '@angular/core/testing';

import { CreateSubtipoService } from './create-subtipo.service';

describe('CreateSubtipoService', () => {
  let service: CreateSubtipoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateSubtipoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
