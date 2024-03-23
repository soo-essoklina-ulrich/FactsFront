import { TestBed } from '@angular/core/testing';

import { DeconnectService } from './deconnect.service';

describe('DeconnectService', () => {
  let service: DeconnectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeconnectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
