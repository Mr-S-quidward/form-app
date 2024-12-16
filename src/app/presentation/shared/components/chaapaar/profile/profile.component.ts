import {Component, input} from '@angular/core';
import {MatBadge} from '@angular/material/badge';
import {NgOptimizedImage} from '@angular/common';
import {MatIcon} from '@angular/material/icon';

export type BadgePosition =
  'above'
  | 'below'
  | 'before'
  | 'after'
  | 'above after'
  | 'above before'
  | 'below after'
  | 'below before';

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
  badgePosition = input<BadgePosition>('above before');
  width = input.required<number>({alias: 'width.rem'});
  height = input.required<number>({alias: 'height.rem'});
  sourcePic = input<string>(undefined, {alias: 'source-pic'});
}
