import { TestBed } from '@angular/core/testing';

import { SrvGeneralInfoService } from './srv-general-info.service';

describe('SrvGeneralInfoService', () => {
  let service: SrvGeneralInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SrvGeneralInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
