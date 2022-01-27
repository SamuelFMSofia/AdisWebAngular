import { TestBed } from '@angular/core/testing';

import { ListarusersService } from '../listarusers.service';

describe('ListarusersService', () => {
  let service: ListarusersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListarusersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
