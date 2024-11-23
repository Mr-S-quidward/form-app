import {JsonFormModel} from './json-form.model';

export interface FormConfigModel {
  form: JsonFormModel;
  steps: number;
  current: number;
  fieldErrors: object;
  errors: [];
}
