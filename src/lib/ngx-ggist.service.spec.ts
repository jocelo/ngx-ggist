import { TestBed } from '@angular/core/testing';

import { NgxGgistService } from './ngx-ggist.service';

describe('NgxGgistService', () => {
  let service: NgxGgistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxGgistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
