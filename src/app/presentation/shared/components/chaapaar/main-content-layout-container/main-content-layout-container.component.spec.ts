import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainContentLayoutContainerComponent } from './main-content-layout-container.component';

describe('MainContentLayoutContainerComponent', () => {
  let component: MainContentLayoutContainerComponent;
  let fixture: ComponentFixture<MainContentLayoutContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainContentLayoutContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainContentLayoutContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
