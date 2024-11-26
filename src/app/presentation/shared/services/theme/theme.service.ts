import {inject, Injectable, Renderer2, RendererFactory2, signal} from '@angular/core';
import {DOCUMENT} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  private readonly renderer2: Renderer2 = inject(RendererFactory2).createRenderer(null, null);
  // isDarkModeOn = signal()

  changeToDarkMode(darkModeOn: boolean): void {
    if (darkModeOn) {
      this.renderer2.removeClass(this.document.body, 'light-theme');
      this.renderer2.addClass(this.document.body, 'dark-theme');
    } else {
      this.renderer2.removeClass(this.document.body, 'dark-theme');
      this.renderer2.addClass(this.document.body, 'light-theme');
    }
  }
}
