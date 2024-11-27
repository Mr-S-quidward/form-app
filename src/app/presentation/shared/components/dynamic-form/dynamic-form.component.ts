import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
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
import {TextInputComponent} from '../inputs/text-input/text-input.component';
import {DynamicFormModel} from '../../../../domain/models/dynamic-form.model';

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
    NgxSkeletonLoaderModule,
    TextInputComponent
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

  @Input()
  supportedInputs: string[] = [];
  formGroup: FormGroup | undefined;

  ngOnChanges() {
    if (this.formConfig) this.formGroup = new FormGroup({});
  }

  onSubmitHandler($event: MouseEvent): void {
    $event.stopPropagation();
    $event.preventDefault();
    console.log(this.formGroup?.value);
  }

  protected readonly Array = Array;
}
