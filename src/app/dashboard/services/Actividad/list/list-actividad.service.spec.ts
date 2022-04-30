import { TestBed } from '@angular/core/testing';
import { ListActividadService } from './list-actividad.service';



describe('ListActividadService', () => {
  let service: ListActividadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListActividadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
