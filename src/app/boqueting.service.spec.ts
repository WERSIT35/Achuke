import { TestBed } from '@angular/core/testing';

import { BoquetingService } from './boqueting.service';

describe('BoquetingService', () => {
  let service: BoquetingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoquetingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
