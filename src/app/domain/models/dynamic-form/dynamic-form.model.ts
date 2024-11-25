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
  nestedFormShowType: string;
  fieldDescriptionShowType: string;
  forms: FormModel[];
  fields: FieldModel[];
}

export interface FieldModel {
  "@type": ".input.NewPasswordField" | ".input.TextField";
  name: string;
  title: string;
  description: string;
  required: boolean;
  type: string;
  errorMessage: string;
  minLength: number;
  maxLength: number;
  descriptionShowType?: string;
  regex?: string;
  info?: string;
  showConfirmPassword?: boolean;
}
