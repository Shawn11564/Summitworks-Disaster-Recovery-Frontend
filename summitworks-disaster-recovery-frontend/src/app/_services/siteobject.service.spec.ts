import { TestBed } from '@angular/core/testing';

import { SiteobjectService } from './siteobject.service';

describe('SiteobjectService', () => {
  let service: SiteobjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SiteobjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
