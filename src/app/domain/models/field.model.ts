export interface FieldModel {
  "@type": ".input.NewPasswordField" | ".input.TextField";
  name: string;
  title: string;
  description: string;
  required: boolean;
  type: string;
  [key: string]: any;
}
