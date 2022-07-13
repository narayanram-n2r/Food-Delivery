import { TestBed } from '@angular/core/testing';

import { ServciesService } from './servcies.service';

describe('ServciesService', () => {
  let service: ServciesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServciesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
