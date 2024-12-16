import {Component, inject} from '@angular/core';
import {
  dynamicFormGetConfigUseCaseProvider
} from '../../../infrastructure/provide-use-cases/dynamic-form/dynamic-form-get-config.provide';
import {DynamicFormRepository} from '../../../domain/repositories/dynamic-form.repository';
import {
  DynamicFormImplementationRepository
} from '../../../infrastructure/repositories/dynamic-form/dynamic-form-implementation.repository';
import {DynamicFormGetConfigUseCase} from '../../../domain/use-cases/dynamic-form-get-config.usecase';
import {toSignal} from '@angular/core/rxjs-interop';
import {RouterOutlet} from '@angular/router';
import {DynamicFormComponent} from '../../shared/components/dynamic-form/dynamic-form.component';
import {ThemeModeComponent} from '../../shared/components/theme-mode/theme-mode.component';
import {ThemeService} from '../../shared/services/theme/theme.service';
import {SearchFieldComponent} from '../../shared/components/chaapaar/search-field/search-field.component';
import {
  HeaderToolbarButtonComponent
} from '../../shared/components/chaapaar/header-toolbar-button/header-toolbar-button.component';
import {SubMenuItemComponent} from '../../shared/components/chaapaar/sub-menu-item/sub-menu-item.component';
import {SubMenuActionComponent} from '../../shared/components/chaapaar/sub-menu-action/sub-menu-action.component';
import {MainMenuItemComponent} from '../../shared/components/chaapaar/main-menu-item/main-menu-item.component';
import {
  MainContentLayoutContainerComponent
} from '../../shared/components/chaapaar/main-content-layout-container/main-content-layout-container.component';
import {ProfileComponent} from '../../shared/components/chaapaar/profile/profile.component';
import {ProfilePanelComponent} from '../../shared/components/profile-panel/profile-panel.component';

@Component({
    selector: 'app-sign-up-page',
  imports: [
    RouterOutlet,
    DynamicFormComponent,
    ThemeModeComponent,
    SearchFieldComponent,
    HeaderToolbarButtonComponent,
    SubMenuItemComponent,
    SubMenuActionComponent,
    MainMenuItemComponent,
    MainContentLayoutContainerComponent,
    ProfileComponent,
    ProfilePanelComponent
  ],
    providers: [
        dynamicFormGetConfigUseCaseProvider,
        {
            provide: DynamicFormRepository,
            useClass: DynamicFormImplementationRepository,
        }
    ],
    templateUrl: './sign-up-page.component.html',
    styleUrl: './sign-up-page.component.scss'
})
export class SignUpPageComponent {
  themeService = inject(ThemeService);
  private _dynamicFormGetConfigUseCase = inject(DynamicFormGetConfigUseCase);
  dynamicFormConfig = toSignal(this._dynamicFormGetConfigUseCase.execute());
}
