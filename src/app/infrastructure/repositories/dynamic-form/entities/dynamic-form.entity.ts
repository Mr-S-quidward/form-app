export interface DynamicFormEntity {
  form: FormEntity;
  steps: number;
  current: number;
  fieldErrors: {};
  errors: [];
}

export interface FormEntity {
  name: string;
  title: string;
  submitLabel: string;
  nestedFormShowType: string;
  fieldDescriptionShowType: "TOOLTIP" | "HINT";
  forms: FormEntity[];
  fields: FieldEntity[];
}

export interface FieldEntity {
  "@type": string;
  name: string;
  title: string;
  description: string;
  required: boolean;
  type: string;
  errorMessage: string;
  minLength?: number;
  maxLength?: number;
  descriptionShowType?: string;
  regex?: string;
  info?: string;
  showConfirmPassword?: boolean;
}
