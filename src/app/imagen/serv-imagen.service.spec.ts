import { TestBed, inject } from '@angular/core/testing';

import { ServImagenService } from './serv-imagen.service';

describe('ServImagenService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServImagenService]
    });
  });

  it('should be created', inject([ServImagenService], (service: ServImagenService) => {
    expect(service).toBeTruthy();
  }));
});
