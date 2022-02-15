import { TestBed } from '@angular/core/testing';

import { CryptoValueService } from './crypto-value.service';

describe('CryptoValueService', () => {
  let service: CryptoValueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CryptoValueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
