import { TestBed, async, inject } from '@angular/core/testing';

import { ForgotGuard } from './forgot.guard';

describe('ForgotGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ForgotGuard]
    });
  });

  it('should ...', inject([ForgotGuard], (guard: ForgotGuard) => {
    expect(guard).toBeTruthy();
  }));
});
