import { TestBed } from '@angular/core/testing';

import { NovelRepositoryService } from './novel-repository.service';

describe('NovelRepositoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NovelRepositoryService = TestBed.get(NovelRepositoryService);
    expect(service).toBeTruthy();
  });
});
