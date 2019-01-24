import { TestBed } from '@angular/core/testing';

import { HttpservicesService } from './httpservices.service';

describe('HttpservicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpservicesService = TestBed.get(HttpservicesService);
    expect(service).toBeTruthy();
  });
});
