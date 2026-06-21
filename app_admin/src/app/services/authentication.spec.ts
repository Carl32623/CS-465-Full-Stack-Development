import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { AuthenticationService } from './authentication';

describe('AuthenticationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient()]
    });
  });

  it('should create an instance', () => {
    expect(TestBed.inject(AuthenticationService)).toBeTruthy();
  });
});
