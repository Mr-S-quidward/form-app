import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderToolbarButtonComponent } from './header-toolbar-button.component';

describe('HeaderToolbarButtonComponent', () => {
  let component: HeaderToolbarButtonComponent;
  let fixture: ComponentFixture<HeaderToolbarButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderToolbarButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderToolbarButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
