import {TextInputModel} from './text-input.model';

export interface DynamicFormModel {
  title: string;
  name: string;
  submitLabel: string;
  fields: TextInputModel[];
}
