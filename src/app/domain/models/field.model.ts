import {InputTypesEnum} from '../../data/models/base-input.model';

export interface FieldModel {
  "@type": ".input.NewPasswordField" | ".input.TextField";
  name: string;
  title: string;
  description: string;
  required: boolean;
  type: InputTypesEnum;
  [key: string]: any;
  errorMessage: string
  minLength: number
  maxLength: number
  descriptionShowType?: string
  regex?: string
  info?: string
  showConfirmPassword?: boolean
}
