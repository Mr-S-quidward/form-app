import {Component, input, output} from '@angular/core';
import {MatMiniFabButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-header-toolbar-button',
  imports: [
    MatIcon,
    MatMiniFabButton
  ],
  templateUrl: './header-toolbar-button.component.html',
  styleUrl: './header-toolbar-button.component.scss'
})
export class HeaderToolbarButtonComponent {
  disabled = input<boolean>(false);
  ariaLabel = input<string>(undefined, {alias: 'aria-label'});
  icon = input.required<string>();
  clicked = output<void>();
  protected readonly onclick = onclick;

  onClickHandler($event: MouseEvent) {
    $event.stopPropagation();
    this.clicked.emit();
  }
}
