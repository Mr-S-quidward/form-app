import { TestBed } from '@angular/core/testing';

import { DynamicFormImplementationRepository } from './dynamic-form-implementation.repository';

describe('DynamicFormImplementationRepository', () => {
  let service: DynamicFormImplementationRepository;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DynamicFormImplementationRepository);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
