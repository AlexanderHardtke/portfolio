import { TestBed } from '@angular/core/testing';

import { PortfoliodataService } from './portfoliodata.service';

describe('PortfoliodataService', () => {
  let service: PortfoliodataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PortfoliodataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
