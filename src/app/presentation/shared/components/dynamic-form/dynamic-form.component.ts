import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges
} from '@angular/core';
import {FormBuilderUtil} from '../../../../infrastructure/utils/form.builder.util';
import {FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';
import {MatError, MatFormField, MatLabel, MatSuffix} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {MatTooltip} from '@angular/material/tooltip';
import {MatIcon} from '@angular/material/icon';
import {MatButton} from '@angular/material/button';
import {FormContainerComponent} from '../form-container/form-container.component';
import {MatCardTitle} from '@angular/material/card';
import {NgxSkeletonLoaderModule} from 'ngx-skeleton-loader';
import {DynamicFormEntity} from '../../../../infrastructure/repositories/dynamic-form/entities/dynamic-form.entity';

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
    MatCardTitle,
    NgxSkeletonLoaderModule
  ],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicFormComponent implements OnChanges {
  @Output()
  formValueEmitter = new EventEmitter();
  @Input()
  formConfig: DynamicFormEntity | undefined;
  formGroup: FormGroup | undefined;

  ngOnChanges(changes: SimpleChanges) {
    console.log(this.formConfig);
    if (this.formConfig && this.formConfig.form.fields.length > 0)
      this.formGroup = FormBuilderUtil.buildForm(this.formConfig.form.fields);
  }

  onSubmitHandler($event: MouseEvent): void {
    $event.stopPropagation();
    $event.preventDefault();
    console.log(this.formGroup?.value);
  }

  protected readonly Array = Array;
}
