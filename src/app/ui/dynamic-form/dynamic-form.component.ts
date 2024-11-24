import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges
} from '@angular/core';
import {FormBuilderUtil} from '../../data/utils/form.builder.util';
import {FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';
import {InputTypesEnum} from '../../data/models/base-input.model';
import {MatError, MatFormField, MatLabel, MatSuffix} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {MatTooltip} from '@angular/material/tooltip';
import {DynamicFormModel} from '../../data/models/dynamic-form.model';
import {MatIcon} from '@angular/material/icon';
import {MatButton} from '@angular/material/button';
import {FormContainerComponent} from '../form-container/form-container.component';
import {MatCardTitle} from '@angular/material/card';

@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgIf,
    MatFormField,
    MatLabel,
    MatInput,
    MatTooltip,
    MatError,
    MatIcon,
    MatSuffix,
    MatButton,
    FormContainerComponent,
    MatCardTitle
  ],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicFormComponent implements OnChanges {
  @Output()
  formValueEmitter = new EventEmitter();
  @Input()
  formConfig: DynamicFormModel | undefined;
  formGroup: FormGroup | undefined;

  ngOnChanges(changes: SimpleChanges) {
    console.log(this.formConfig);
    if (this.formConfig && this.formConfig.fields.length > 0)
      this.formGroup = FormBuilderUtil.buildForm(this.formConfig.fields);
  }

  onSubmitHandler($event: MouseEvent): void {
    $event.stopPropagation();
    $event.preventDefault();
    console.log(this.formGroup?.value);
  }

  protected readonly InputTypesEnum = InputTypesEnum;
}
