import { TestBed, inject } from '@angular/core/testing';

import { AppGeneralService } from './app-general.service';

describe('AppGeneralService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppGeneralService]
    });
  });

  it('should be created', inject([AppGeneralService], (service: AppGeneralService) => {
    expect(service).toBeTruthy();
  }));
});
