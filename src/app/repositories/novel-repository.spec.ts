import { TestBed } from '@angular/core/testing';

import { NovelRepository } from './novel-repository';

describe('NovelRepository', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NovelRepository = TestBed.get(NovelRepository);
    expect(service).toBeTruthy();
  });
});
