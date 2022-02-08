import { TestBed } from '@angular/core/testing';

import { SchoolHttpInterceptor } from './school-http.interceptor';

describe('SchoolHttpInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      SchoolHttpInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: SchoolHttpInterceptor = TestBed.inject(SchoolHttpInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
