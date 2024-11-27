import {Component, inject, Input, OnDestroy, OnInit, signal} from '@angular/core';
import {MatError, MatFormField, MatLabel, MatSuffix} from "@angular/material/form-field";
import {MatIcon} from "@angular/material/icon";
import {MatInput} from "@angular/material/input";
import {ControlContainer, FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {FieldModel} from '../../../../../domain/models/dynamic-form.model';
import {MatTooltip} from '@angular/material/tooltip';
import {FormBuilderUtil} from '../../../../../infrastructure/utils/form.builder.util';
import {flush} from '@angular/core/testing';

@Component({
  selector: 'app-text-input',
  standalone: true,
  imports: [
    MatError,
    MatFormField,
    MatIcon,
    MatInput,
    MatLabel,
    MatSuffix,
    ReactiveFormsModule,
    MatTooltip
  ],
  templateUrl: './text-input.component.html',
  styleUrl: './text-input.component.scss',
  viewProviders: [
    {
      provide: ControlContainer,
      useFactory: () => inject(ControlContainer, {skipSelf: true}),
    }
  ]
})
export class TextInputComponent implements OnInit, OnDestroy {
  @Input({required: true})
  field!: FieldModel;
  parentContainer = inject(ControlContainer);
  showPassword = signal<boolean>(false);
  showConfirmPassword = signal<boolean>(false);

  ngOnInit() {
    this._addControlToParentControl(this.field.name);
    if (this.field.showConfirmPassword) this._addControlToParentControl("confirm" + this.field.name);
  }

  ngOnDestroy() {
    this.parentFormGroup.removeControl(this.field.name);
    this.parentFormGroup.updateValueAndValidity({onlySelf: true});
  }

  get parentFormGroup(): FormGroup {
    return this.parentContainer.control as FormGroup;
  }

  private _addControlToParentControl(controlKey: string): void {
    this.parentFormGroup.addControl(
      controlKey,
      new FormControl<string>('', {
        nonNullable: true,
        validators: FormBuilderUtil.buildValidators(this.field),
      }));
  }

  onClickVisibilityHandler($event: MouseEvent, isConfirm: boolean): void {
    $event.stopPropagation();
    $event.preventDefault();
    if (isConfirm) this.showConfirmPassword.set(!this.showConfirmPassword());
    else this.showPassword.set(!this.showPassword());
  }
}
