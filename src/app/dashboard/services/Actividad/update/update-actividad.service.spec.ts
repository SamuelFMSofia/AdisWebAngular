import { TestBed } from '@angular/core/testing';

import { UpdateActividadService } from './update-actividad.service';

describe('UpdateActividadService', () => {
  let service: UpdateActividadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateActividadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
