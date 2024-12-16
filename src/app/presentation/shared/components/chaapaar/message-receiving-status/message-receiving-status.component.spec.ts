import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageReceivingStatusComponent } from './message-receiving-status.component';

describe('MessageRecievingStatusComponent', () => {
  let component: MessageReceivingStatusComponent;
  let fixture: ComponentFixture<MessageReceivingStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MessageReceivingStatusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessageReceivingStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
