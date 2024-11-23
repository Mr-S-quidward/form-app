import {BaseInputModel} from './base-input.model';

export interface TextInputModel extends BaseInputModel {
  regex?: string;
  minLength?: number;
  maxLength?: number;
}
