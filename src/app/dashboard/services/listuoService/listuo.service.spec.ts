import { TestBed } from '@angular/core/testing';

import { ListuoService } from './listuo.service';

describe('ListuoService', () => {
  let service: ListuoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListuoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
