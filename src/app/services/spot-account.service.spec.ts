import { TestBed } from '@angular/core/testing';

import { SpotAccountService } from './spot-account.service';

describe('SpotAccountService', () => {
  let service: SpotAccountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpotAccountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
