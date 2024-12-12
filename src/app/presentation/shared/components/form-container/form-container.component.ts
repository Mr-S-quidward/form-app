import {Component, Input} from '@angular/core';
import {MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitle} from '@angular/material/card';

@Component({
    selector: 'app-form-container',
    imports: [
        MatCard,
        MatCardHeader,
        MatCardTitle,
        MatCardContent,
        MatCardActions
    ],
    templateUrl: './form-container.component.html',
    styleUrl: './form-container.component.scss'
})
export class FormContainerComponent {
  @Input()
  width: string = '100%';
}
