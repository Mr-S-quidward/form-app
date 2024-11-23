import {FieldModel} from './field.model';

export interface FormConfigModel {
  form: FormModel;
  steps: number;
  current: number;

  [key: string]: any;
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
