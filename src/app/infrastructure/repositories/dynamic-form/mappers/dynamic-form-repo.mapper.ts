import {Mapper} from '../../../../base/utils/mapper';
import {DynamicFormEntity, FormEntity} from '../entities/dynamic-form.entity';
import {DynamicFormModel, FormModel} from '../../../../domain/models/dynamic-form.model';

export class DynamicFormImplementationRepoMapper extends Mapper<DynamicFormEntity, DynamicFormModel> {
   mapFromForm(form: FormEntity): FormModel {
    return {
      title: form.title,
      name: form.name,
      fieldDescriptionShowType: form.fieldDescriptionShowType,
      submitLabel: form.submitLabel,
      forms: form.forms.map(this.mapFromForm),
      fields: form.fields.map(field => ({
        type: field.type.toLowerCase().includes("textarea") ? "textarea" :
          field.type.toLowerCase().includes("select") ? "select" : "input",
        inputType: field.type.toLowerCase().includes("text") ? "text" :
          field.type.toLowerCase().includes("password") ? "password" :
            field.type.toLowerCase().includes("checkbox") ? "checkbox" :
              field.type.toLowerCase().includes("radio") ? "radio" :
                field.type.toLowerCase().includes("range") ? "range" : "text",
        name: field.name,
        label: field.title,
        description: field.description,
        descriptionShowType: field.descriptionShowType,
        errorMessage: field.errorMessage,
        info: field.info,
        showConfirmPassword: field.showConfirmPassword,
        validators: {
          required: field.required,
          maxLength: field.maxLength,
          minLength: field.minLength,
          regex: field.regex,
        },
      })),
    }
  }

   mapToForm(form: FormModel): FormEntity {
    return {
      name: form.name,
      title: form.title,
      submitLabel: form.submitLabel,
      nestedFormShowType: form.fieldDescriptionShowType,
      fieldDescriptionShowType: form.fieldDescriptionShowType,
      forms: form.forms.map(this.mapToForm),
      fields: form.fields.map(field => ({
        "@type": field.type.toString(),
        name: field.name,
        title: field.label,
        type: field.inputType.toString(),
        showConfirmPassword: field.showConfirmPassword,
        description: field.description,
        descriptionShowType: field.descriptionShowType,
        errorMessage: field.errorMessage,
        info: field.info,
        regex: field.validators.regex,
        minLength: field.validators.minLength,
        maxLength: field.validators.maxLength,
        required: field.validators.required,
      })),
    }
  }

  override mapFrom(param: DynamicFormEntity): DynamicFormModel {
    return {
      form: this.mapFromForm(param.form),
      fieldErrors: param.fieldErrors,
      current: param.current,
      errors: param.errors,
      steps: param.steps,
    };
  }

  override mapTo(param: DynamicFormModel): DynamicFormEntity {
    return {
      form: this.mapToForm(param.form),
      fieldErrors: param.fieldErrors,
      current: param.current,
      errors: param.errors,
      steps: param.steps,
    };
  }
}
