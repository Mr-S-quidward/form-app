import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubMenuActionComponent } from './sub-menu-action.component';

describe('SubMenuActionComponent', () => {
  let component: SubMenuActionComponent;
  let fixture: ComponentFixture<SubMenuActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubMenuActionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubMenuActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
