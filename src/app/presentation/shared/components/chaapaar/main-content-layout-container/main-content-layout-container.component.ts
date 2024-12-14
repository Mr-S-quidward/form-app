import {Component, inject} from '@angular/core';
import {ResponsiveService} from '../../../services/responsive/responsive.service';
import {MatSidenav, MatSidenavContainer, MatSidenavContent} from '@angular/material/sidenav';
import {toSignal} from '@angular/core/rxjs-interop';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-main-content-layout-container',
  imports: [
    MatSidenavContainer,
    MatSidenav,
    MatSidenavContent,
    NgClass
  ],
  templateUrl: './main-content-layout-container.component.html',
  styleUrl: './main-content-layout-container.component.scss'
})
export class MainContentLayoutContainerComponent {
  private readonly layout = inject(ResponsiveService);
  mobile = toSignal(this.layout.mobile);
  tablet = toSignal(this.layout.tablet);
  desktop = toSignal(this.layout.desktop);
}
