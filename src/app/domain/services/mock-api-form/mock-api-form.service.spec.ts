import { TestBed } from '@angular/core/testing';

import { MockApiFormService } from './mock-api-form.service';

describe('MockApiFormService', () => {
  let service: MockApiFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockApiFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
