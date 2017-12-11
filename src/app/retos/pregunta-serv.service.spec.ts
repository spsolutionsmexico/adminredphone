import { TestBed, inject } from '@angular/core/testing';

import { PreguntaServService } from './pregunta-serv.service';

describe('PreguntaServService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PreguntaServService]
    });
  });

  it('should be created', inject([PreguntaServService], (service: PreguntaServService) => {
    expect(service).toBeTruthy();
  }));
});
