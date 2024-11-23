import {FieldModel} from '../../domain/models/field.model';
import {FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';

export class FormBuilderUtil {
  static buildForm(fields: FieldModel[]): FormGroup {
    const group: { [key: string]: FormControl } = {};

    fields.forEach((field) => {
      const validators: ValidatorFn | ValidatorFn[] = [];

      if (field.required) validators.push(Validators.required);
      if (field["minLength"]) validators.push(Validators.minLength(field["minLength"]));
      if (field["maxLength"]) validators.push(Validators.maxLength(field["maxLength"]));
      if (field["regex"]) validators.push(Validators.pattern(field["regex"]));

      group[field.name] = new FormControl('', validators);
    });

    return new FormGroup(group);
  }
}
