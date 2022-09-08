import { TestBed } from '@angular/core/testing';

import { BundleCategoryService } from './bundle-category.service';

describe('BundleCategoryService', () => {
  let service: BundleCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BundleCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
