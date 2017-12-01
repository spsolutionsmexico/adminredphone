import { TestBed, inject } from '@angular/core/testing';

import { RetosServService } from './retos-serv.service';

describe('RetosServService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RetosServService]
    });
  });

  it('should be created', inject([RetosServService], (service: RetosServService) => {
    expect(service).toBeTruthy();
  }));
});
