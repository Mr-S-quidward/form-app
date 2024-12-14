import {Component, input} from '@angular/core';
import {MatButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {MatPrefix} from '@angular/material/form-field';

@Component({
  selector: 'app-sub-menu-action',
  imports: [
    MatIcon,
    MatButton,
    MatPrefix
  ],
  templateUrl: './sub-menu-action.component.html',
  styleUrl: './sub-menu-action.component.scss'
})
export class SubMenuActionComponent {
  icon = input.required<string>();
  buttonLabel = input.required<string>({alias: 'button-label'});
  disabled = input<boolean>(false);
}
