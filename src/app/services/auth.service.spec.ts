import { TestBed, inject } from '@angular/core/testing';

import { AuthService, AUTH_STORE } from './auth.service';

describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthService,
        { provide: AUTH_STORE, useValue: 'test-user' }
      ]
    });
  });

  it('should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));
});
