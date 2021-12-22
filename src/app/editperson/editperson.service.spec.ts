import { TestBed } from '@angular/core/testing';

import { EditpersonService } from './editperson.service';

describe('EditpersonService', () => {
  let service: EditpersonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditpersonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
