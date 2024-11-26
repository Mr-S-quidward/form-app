import { TestBed } from '@angular/core/testing';

import { BuildInfoImplementationRepository } from './build-info-implementation-repository';

describe('BuildInfoImplementationRepository', () => {
  let service: BuildInfoImplementationRepository;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuildInfoImplementationRepository);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
