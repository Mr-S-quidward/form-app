import {Component, input, signal} from '@angular/core';
import {ProfileComponent} from '../profile/profile.component';
import {MatIcon} from '@angular/material/icon';
import {DatePipe} from '@angular/common';
import {
  MessageReceivingStatusComponent,
  MessageReceivingStatusEnum
} from '../message-receiving-status/message-receiving-status.component';
import {
  ChatNotifyingStatusComponent,
  ChatNotifyingStatusEnum
} from '../chat-notifying-status/chat-notifying-status.component';
import {MatBadge} from '@angular/material/badge';

@Component({
  selector: 'app-chat-list-item',
  imports: [
    ProfileComponent,
    MatIcon,
    DatePipe,
    MessageReceivingStatusComponent,
    ChatNotifyingStatusComponent,
    MatBadge
  ],
  templateUrl: './chat-list-item.component.html',
  styleUrl: './chat-list-item.component.scss'
})
export class ChatListItemComponent {
  date = new Date();
  protected readonly MessageReceivingStatusEnum = MessageReceivingStatusEnum;
  protected readonly ChatNotifyingStatusEnum = ChatNotifyingStatusEnum;
  name = input.required<string>();
  shortenedMessage = input.required<string>({alias: 'message'});
}
