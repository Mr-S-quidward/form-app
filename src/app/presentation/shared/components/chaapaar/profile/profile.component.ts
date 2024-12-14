import {Component, input} from '@angular/core';
import {MatBadge} from '@angular/material/badge';
import {NgOptimizedImage} from '@angular/common';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-profile',
  imports: [
    MatBadge,
    NgOptimizedImage,
    MatIcon
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  width = input.required<number>({alias: 'width.rem'});
  height = input.required<number>({alias: 'height.rem'});
  sourcePic = input<string>(undefined, {alias: 'source-pic'});
}
