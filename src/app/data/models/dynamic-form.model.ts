import {BaseInputModel} from './base-input.model';

export interface DynamicFormModel {
  title: string;
  name: string;
  submitLabel: string;
  fields: BaseInputModel[];
}
