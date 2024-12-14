import {Component, ElementRef, inject, Renderer2} from '@angular/core';
import {MatFormField, MatPrefix, MatSuffix} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-search-field',
  imports: [
    MatFormField,
    MatInput,
    MatIcon,
    MatPrefix,
    MatSuffix
  ],
  templateUrl: './search-field.component.html',
  styleUrl: './search-field.component.scss',
})
export class SearchFieldComponent {
  el = inject(ElementRef).nativeElement;
  renderer2 = inject(Renderer2);

  constructor() {
    this.renderer2.addClass(this.el, 'search-field');
    this.renderer2.addClass(this.el, 'desktop');
  }
}
