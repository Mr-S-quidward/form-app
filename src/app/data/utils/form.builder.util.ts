import {FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import {BaseInputModel, InputTypesEnum} from '../models/base-input.model';

export class FormBuilderUtil {
  static buildForm(fields: BaseInputModel[]): FormGroup {
    const group: { [key: string]: FormControl } = {};

    fields.forEach((field) => {
      const validators: ValidatorFn | ValidatorFn[] = [];
      if (field.required) validators.push(Validators.required);
      switch (field.type) {
        case InputTypesEnum.text:
        case InputTypesEnum.newPassword:
          if (field["minLength"]) validators.push(Validators.minLength(field["minLength"]));
          if (field["maxLength"]) validators.push(Validators.maxLength(field["maxLength"]));
          if (field["regex"]) validators.push(Validators.pattern(field["regex"]));
          break;
      }

      group[field.name] = new FormControl('', validators);
    });

    return new FormGroup(group);
  }
}