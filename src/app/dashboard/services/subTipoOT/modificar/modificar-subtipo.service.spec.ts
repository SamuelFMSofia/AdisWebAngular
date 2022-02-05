import { TestBed } from '@angular/core/testing';

import { ModificarSubtipoService } from './modificar-subtipo.service';

describe('ModificarSubtipoService', () => {
  let service: ModificarSubtipoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModificarSubtipoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
