export interface DynamicFormModel {
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
  fieldDescriptionShowType: "TOOLTIP" | "HINT";
  forms: FormModel[];
  fields: FieldModel[];
}

export interface FieldModel {
  type: "input" | "textarea" | "select";
  inputType: "text" | "checkbox" | "radio" | "password" | "range";
  name: string;
  label: string;
  description: string;
  errorMessage: string;
  validators: IValidators;
  descriptionShowType?: string;
  info?: string;
  showConfirmPassword?: boolean;
}

export interface IValidators {
  required: boolean;
  minLength?: number;
  maxLength?: number;
  regex?: string;
}
