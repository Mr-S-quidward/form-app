import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges
} from '@angular/core';
import {FormModel} from '../../domain/models/form-config.model';
import {FormBuilderUtil} from '../../data/utils/form.builder.util';
import {FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicFormComponent implements OnChanges {
  @Output()
  formValueEmitter = new EventEmitter();
  @Input()
  formConfig: FormModel | undefined;
  formGroup: FormGroup | undefined;

  ngOnChanges(changes: SimpleChanges) {
    console.log(this.formConfig);
    if (this.formConfig && this.formConfig.fields.length > 0)
      this.formGroup = FormBuilderUtil.buildForm(this.formConfig.fields);
  }

  onSubmitHandler($event: any): void {
    console.log($event);
  }
}
