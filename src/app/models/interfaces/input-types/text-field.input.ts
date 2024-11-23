import {BaseInput} from './base.input';

export interface TextFieldInput extends BaseInput {
  regex?: string;
  minLength?: string;
  maxLength?: string;
}
