import {Component, input} from '@angular/core';
import {MatIcon} from '@angular/material/icon';

export enum MessageReceivingStatusEnum {
  sent,
  received,
  seen,
  pending,
  error,
}

@Component({
  selector: 'app-message-receiving-status',
  imports: [
    MatIcon
  ],
  templateUrl: './message-receiving-status.component.html',
  styleUrl: './message-receiving-status.component.scss'
})
export class MessageReceivingStatusComponent {
  status = input.required<MessageReceivingStatusEnum>();
  protected readonly MessageReceivingStatusEnum = MessageReceivingStatusEnum;
}
