import {computed, inject, Injectable, Renderer2, RendererFactory2, signal} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {LocalStorageService} from '../storage/local-storage/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly lightTheme: string = "light-theme";
  private readonly darkTheme: string = "dark-theme";
  private readonly document = inject(DOCUMENT);
  private readonly renderer2: Renderer2 = inject(RendererFactory2).createRenderer(null, null);
  private readonly localStorageService = inject(LocalStorageService);
  readonly DARK_MODE_KEY = "darkMode";
  isDarkModeOn = signal<boolean>(this.localStorageService.get(this.DARK_MODE_KEY)?.startsWith('t') || false);
  theme = computed(() => {
    if (this.isDarkModeOn()) return this.darkTheme;
    else return this.lightTheme;
  });

  changeTheme(darkModeOn: boolean): void {
    this.isDarkModeOn.set(darkModeOn);
    this.localStorageService.remove(this.DARK_MODE_KEY);
    this.localStorageService.save(this.DARK_MODE_KEY, darkModeOn.toString());
    if (darkModeOn) this.renderer2.removeClass(this.document.body, this.lightTheme);
    else this.renderer2.removeClass(this.document.body, this.darkTheme);
    this.renderer2.addClass(this.document.body, this.theme());
  }
}
