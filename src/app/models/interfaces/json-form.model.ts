import {BaseInput} from './input-types/base.input';

export interface JsonFormModel {
  name: string;
  title: string;
  submitLabel: string;
  nestedFormShowType: "MAIN_FORM";
  fieldDescriptionShowType: "TOOLTIP";
  fields: BaseInput[];
  forms: JsonFormModel[];
}
