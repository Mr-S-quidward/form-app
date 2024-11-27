import {ValidatorFn, Validators} from '@angular/forms';
import {FieldModel} from '../../domain/models/dynamic-form.model';

export class FormBuilderUtil {

  static buildValidators(field: FieldModel): ValidatorFn | ValidatorFn[] {
    const validators: ValidatorFn | ValidatorFn[] = [];
    if (field.validators.required) validators.push(Validators.required);
    switch (field.type) {
      case "input":
        if (field.validators.minLength) validators.push(Validators.minLength(field.validators.minLength));
        if (field.validators.maxLength) validators.push(Validators.maxLength(field.validators.maxLength));
        if (field.validators.regex) validators.push(Validators.pattern(field.validators.regex));
        break;
    }
    return validators;
  }
}
