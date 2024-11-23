import {TestBed} from '@angular/core/testing';

import {FormService} from './form.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {FormConfigModel} from '../../models/interfaces/form-config.model';

describe('FormService', () => {
  let service: FormService;
  let httpTestingController: HttpTestingController;

  const mockFormConfig: FormConfigModel = {
    "form": {
      "name": "signup",
      "title": "Base Information",
      "submitLabel": "Register",
      "nestedFormShowType": "MAIN_FORM",
      "fieldDescriptionShowType": "TOOLTIP",
      forms: [],
      fields: [],
    },
    "steps": 5,
    "current": 0,
    "fieldErrors": {},
    "errors": []
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FormService],
    });

    service = TestBed.inject(FormService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify(); // Ensure no outstanding HTTP requests
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch form configuration', () => {
    service.get().subscribe((config) => {
      expect(config).toEqual(mockFormConfig);
    });

    const req = httpTestingController.expectOne('assets/form.config.json');
    expect(req.request.method).toBe('GET');

    // Respond with mock data
    req.flush(mockFormConfig);
  });

  it('should handle HTTP error gracefully', () => {
    const errorMessage = '404 Not Found';

    service.get().subscribe({
      next: () => fail('Expected an error, not form config'),
      error: (error) => {
        expect(error).toBeTruthy();
        expect(error.status).toBe(404);
      },
    });

    const req = httpTestingController.expectOne('assets/form.config.json');
    req.flush(errorMessage, {status: 404, statusText: 'Not Found'});
  });
});
