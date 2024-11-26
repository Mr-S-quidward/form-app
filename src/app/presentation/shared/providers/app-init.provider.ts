import {APP_INITIALIZER, Injector} from '@angular/core';

export const AppInitProvider = {
  provide: APP_INITIALIZER,
  multi: true,
  useFactory: (injector: Injector) => {
    return () => {

    }
  },
  deps: [Injector],
}
