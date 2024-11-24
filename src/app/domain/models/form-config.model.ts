import {FieldModel} from './field.model';

export interface FormConfigModel {
  form: FormModel;
  steps: number;
  current: number;
  fieldErrors: {};
  errors: [];
}

export interface FormModel {
  name: string;
  title: string;
  submitLabel: string;
  fields: FieldModel[];
  nestedFormShowType: string;
  fieldDescriptionShowType: string;
  forms: FormConfigModel[];
}
