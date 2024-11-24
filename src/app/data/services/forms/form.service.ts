import {inject, Injectable} from '@angular/core';
import {MockApiFormService} from '../../../domain/services/mock-api-form/mock-api-form.service';
import {map, Observable} from 'rxjs';
import {DynamicFormModel} from '../../models/dynamic-form.model';
import {InputTypesEnum} from '../../models/base-input.model';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  private _api = inject(MockApiFormService);

  getFormConfig(): Observable<DynamicFormModel> {
    return this._api.getFormConfig().pipe(
      map(config => ({
        name: config.form.name,
        title: config.form.title,
        submitLabel: config.form.submitLabel,
        fields: config.form.fields.map(field => ({
          name: field.name,
          title: field.title,
          type: field.type as InputTypesEnum,
          description: field.description,
          errorMessage: field.errorMessage,
          required: field.required,
          minLength: field.minLength,
          maxLength: field.maxLength,
          regex: field.regex,
          showConfirmPassword: field.showConfirmPassword,
          info: field.info,
        }))
      }))
    );
  }
}
