import { DOCUMENT } from '@angular/common';
import {Component, inject, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'form-app';

  document = inject(DOCUMENT);

  ngOnInit() {
    this.document.dir = 'rtl';
  }
}
