import { TestBed } from '@angular/core/testing';

import { CreateActividadService } from './create-actividad.service';

describe('CreateActividadService', () => {
  let service: CreateActividadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateActividadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
