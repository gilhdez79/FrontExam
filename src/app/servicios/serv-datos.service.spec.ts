import { TestBed } from '@angular/core/testing';

import { ServDatosService } from './serv-datos.service';

describe('ServDatosService', () => {
  let service: ServDatosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServDatosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
