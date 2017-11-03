import { TestBed, inject } from '@angular/core/testing';

import { ChartDemoService } from './chart-demo.service';

describe('ChartDemoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChartDemoService]
    });
  });

  it('should be created', inject([ChartDemoService], (service: ChartDemoService) => {
    expect(service).toBeTruthy();
  }));
});
