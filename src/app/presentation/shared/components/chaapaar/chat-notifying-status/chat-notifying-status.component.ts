import {Component, input} from '@angular/core';
import {MatIcon} from '@angular/material/icon';

export enum ChatNotifyingStatusEnum {
  mute,
  enabled,
}

@Component({
  selector: 'app-chat-notifying-status',
  imports: [
    MatIcon
  ],
  templateUrl: './chat-notifying-status.component.html',
  styleUrl: './chat-notifying-status.component.scss'
})
export class ChatNotifyingStatusComponent {
  status = input.required<ChatNotifyingStatusEnum>();
  protected readonly ChatNotifyingStatusEnum = ChatNotifyingStatusEnum;
}
