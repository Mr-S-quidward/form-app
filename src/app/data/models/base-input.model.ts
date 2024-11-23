export interface BaseInputModel {
  type: InputTypesEnum;
  name: string;
  title: string;
  description: string;
  errorMessage: string;
  required: boolean;
}

export enum InputTypesEnum {
  text = "TEXT",
  newPassword = "NEW_PASSWORD",
}
