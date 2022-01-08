import { TestBed } from '@angular/core/testing';

import { UnidadTecnicaService } from './unidad-tecnica.service';

describe('UnidadTecnicaService', () => {
  let service: UnidadTecnicaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnidadTecnicaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
