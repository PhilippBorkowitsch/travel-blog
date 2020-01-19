import { TestBed } from '@angular/core/testing';

import { BlogEntriesService } from './blog-entries.service';

describe('BlogEntriesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BlogEntriesService = TestBed.get(BlogEntriesService);
    expect(service).toBeTruthy();
  });
});
