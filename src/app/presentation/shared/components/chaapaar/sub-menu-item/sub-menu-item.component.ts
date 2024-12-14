import {Component, input, output, signal} from '@angular/core';
import {
  MatExpansionModule,
} from '@angular/material/expansion';
import {MatIcon} from '@angular/material/icon';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-sub-menu-item',
  imports: [
    MatExpansionModule,
    MatIcon,
    NgClass,
  ],
  templateUrl: './sub-menu-item.component.html',
  styleUrl: './sub-menu-item.component.scss'
})
export class SubMenuItemComponent {
  iconPrefix = input<string>();
  iconSuffix = input<string>();
  panelLabel = input.required<string>({alias: 'panel-label'});
  hideToggle = input<boolean>(false);
  disabled = input<boolean>(false);
  action = output<void>();
  readonly panelOpenState = signal(false);

  onClickHandler($event: MouseEvent) {
    $event.stopPropagation();
    this.action.emit();
  }
}
