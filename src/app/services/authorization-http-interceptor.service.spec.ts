import { TestBed } from '@angular/core/testing';

import { AuthorizationHttpInterceptorService } from './authorization-http-interceptor.service';

describe('AuthorizationHttpInterceptorService', () => {
  let service: AuthorizationHttpInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthorizationHttpInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
