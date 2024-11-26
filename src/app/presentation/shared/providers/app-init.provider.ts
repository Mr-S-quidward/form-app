import {APP_INITIALIZER, Injector} from '@angular/core';
import {LocalStorageService} from '../services/storage/local-storage/local-storage.service';
import {ThemeService} from '../services/theme/theme.service';

export const AppInitProvider = {
  provide: APP_INITIALIZER,
  multi: true,
  useFactory: (injector: Injector) => {
    return () => {
      const localStorageService = injector.get(LocalStorageService);
      const themeService = injector.get(ThemeService);
      if (localStorageService && themeService && localStorageService.get(themeService.DARK_MODE_KEY)) {
        themeService.changeTheme(localStorageService.get(themeService.DARK_MODE_KEY)!.startsWith("t"));
      }
    }
  },
  deps: [Injector],
}
