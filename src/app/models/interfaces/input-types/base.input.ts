import {InputTypesEnum} from '../../entities/enums/input-types.enum';

export interface BaseInput {
  "@type": InputTypesEnum;
  name: string;
  title: string;
  description: string;
  errorMessage: string;
  required: boolean;
  type: string;
}
