import { TestBed, inject } from '@angular/core/testing';

import { ServGraficoService } from './serv-grafico.service';

describe('ServGraficoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServGraficoService]
    });
  });

  it('should be created', inject([ServGraficoService], (service: ServGraficoService) => {
    expect(service).toBeTruthy();
  }));
});
