import {Component, input, output} from '@angular/core';
import {MatSlideToggle, MatSlideToggleChange} from '@angular/material/slide-toggle';

@Component({
  selector: 'app-theme-mode',
  standalone: true,
  imports: [
    MatSlideToggle
  ],
  templateUrl: './theme-mode.component.html',
  styleUrl: './theme-mode.component.scss'
})
export class ThemeModeComponent {
  label = input<string>()
  checked = output<boolean>();

  onChangeHandler({checked}: MatSlideToggleChange): void {
    this.checked.emit(checked);
  }
}
