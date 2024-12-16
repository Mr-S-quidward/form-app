import {Component, input} from '@angular/core';
import {ProfileComponent} from '../profile/profile.component';

@Component({
  selector: 'app-profile-panel',
  imports: [
    ProfileComponent
  ],
  templateUrl: './profile-panel.component.html',
  styleUrl: './profile-panel.component.scss'
})
export class ProfilePanelComponent {
  name = input.required<string>();
  phoneNumber = input.required<string>();
  email = input.required<string>();

}
