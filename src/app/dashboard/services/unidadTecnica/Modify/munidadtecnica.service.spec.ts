import { TestBed } from '@angular/core/testing';

import { MunidadtecnicaService } from './munidadtecnica.service';

describe('MunidadtecnicaService', () => {
  let service: MunidadtecnicaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MunidadtecnicaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
