import {Component, input, OnInit, output} from '@angular/core';
import {MatSlideToggle, MatSlideToggleChange} from '@angular/material/slide-toggle';
import {FormControl, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-theme-mode',
  standalone: true,
  imports: [
    MatSlideToggle,
    ReactiveFormsModule
  ],
  templateUrl: './theme-mode.component.html',
  styleUrl: './theme-mode.component.scss'
})
export class ThemeModeComponent implements OnInit {
  label = input<string>()
  checked = input.required<boolean>()
  checkedChange = output<boolean>();
  formControl = new FormControl<boolean>(false, {nonNullable: true});

  ngOnInit() {
    this.formControl.setValue(this.checked());
  }

  onChangeHandler({checked}: MatSlideToggleChange): void {
    this.checkedChange.emit(checked);
  }
}
