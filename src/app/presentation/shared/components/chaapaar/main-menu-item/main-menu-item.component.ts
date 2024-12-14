import {Component, input, signal} from '@angular/core';
import { MatFabButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {MatBadge} from '@angular/material/badge';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-main-menu-item',
  imports: [
    MatIcon,
    MatBadge,
    NgClass,
    MatFabButton
  ],
  templateUrl: './main-menu-item.component.html',
  styleUrl: './main-menu-item.component.scss'
})
export class MainMenuItemComponent {
  disabled = input<boolean>(false);
  badge = input<number>();
  icon = input.required<string>();
  buttonLabel = input.required<string>({alias: 'button-label'});
  readonly showLabel = signal<boolean>(false);
}
