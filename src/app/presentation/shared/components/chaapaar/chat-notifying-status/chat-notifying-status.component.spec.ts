import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatNotifyingStatusComponent } from './chat-notifying-status.component';

describe('ChatNotifyingStatusComponent', () => {
  let component: ChatNotifyingStatusComponent;
  let fixture: ComponentFixture<ChatNotifyingStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatNotifyingStatusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatNotifyingStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
