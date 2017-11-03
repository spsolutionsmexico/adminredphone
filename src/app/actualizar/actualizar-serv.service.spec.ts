import { TestBed, inject } from '@angular/core/testing';

import { ActualizarServService } from './actualizar-serv.service';

describe('ActualizarServService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ActualizarServService]
    });
  });

  it('should be created', inject([ActualizarServService], (service: ActualizarServService) => {
    expect(service).toBeTruthy();
  }));
});
