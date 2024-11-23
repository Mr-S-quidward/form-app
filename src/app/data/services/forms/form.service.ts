import {inject, Injectable} from '@angular/core';
import {MockApiFormService} from '../../../domain/services/mock-api-form/mock-api-form.service';
import {map, Observable} from 'rxjs';
import {FormModel} from '../../../domain/models/form-config.model';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  private _api = inject(MockApiFormService);

  getFormConfig(): Observable<FormModel> {
    return this._api.getFormConfig().pipe(
      map(config => config.form)
    );
  }
}
