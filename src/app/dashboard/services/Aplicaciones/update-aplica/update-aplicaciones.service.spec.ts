import { TestBed } from '@angular/core/testing';

import { UpdateAplicacionesService } from '../update-aplicaciones.service';

describe('UpdateAplicacionesService', () => {
  let service: UpdateAplicacionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateAplicacionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
