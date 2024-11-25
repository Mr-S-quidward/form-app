import {FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import {FieldModel} from '../../domain/models/dynamic-form/dynamic-form.model';

export class FormBuilderUtil {
  static buildForm(fields: FieldModel[]): FormGroup {
    const group: { [key: string]: FormControl } = {};

    fields.forEach((field) => {
      const validators: ValidatorFn | ValidatorFn[] = [];
      if (field.required) validators.push(Validators.required);
      switch (field["@type"]) {
        case ".input.TextField":
        case ".input.NewPasswordField":
          if (field.minLength) validators.push(Validators.minLength(field.minLength));
          if (field.maxLength) validators.push(Validators.maxLength(field.maxLength));
          if (field.regex) validators.push(Validators.pattern(field.regex));
          break;
      }

      group[field.name] = new FormControl('', validators);
      if (field.showConfirmPassword) group['confirm' + field.name] = new FormControl('', validators);
    });

    return new FormGroup(group);
  }
}
