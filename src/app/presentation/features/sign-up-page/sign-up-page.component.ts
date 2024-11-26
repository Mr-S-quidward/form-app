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
import {buildInfoGetUseCaseProvider} from '../../../infrastructure/provide-use-cases/build-info/build-info-get.provide';
import {BuildInfoRepository} from '../../../domain/repositories/build-info.repository';
import {
  BuildInfoImplementationRepository
} from '../../../infrastructure/repositories/build-info/build-info-implementation-repository';
import {BuildInfoGetUseCase} from '../../../domain/use-cases/build-info-get.usecase';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-sign-up-page',
  standalone: true,
  imports: [
    RouterOutlet,
    DynamicFormComponent,
    ThemeModeComponent,
    DatePipe
  ],
  providers: [
    dynamicFormGetConfigUseCaseProvider,
    {
      provide: DynamicFormRepository,
      useClass: DynamicFormImplementationRepository,
    },
    buildInfoGetUseCaseProvider,
    {
      provide: BuildInfoRepository,
      useClass: BuildInfoImplementationRepository,
    }
  ],
  templateUrl: './sign-up-page.component.html',
  styleUrl: './sign-up-page.component.scss'
})
export class SignUpPageComponent {
  themeService = inject(ThemeService);
  private _dynamicFormGetConfigUseCase = inject(DynamicFormGetConfigUseCase);
  private _buildInfoGetUseCase = inject(BuildInfoGetUseCase);
  dynamicFormConfig = toSignal(this._dynamicFormGetConfigUseCase.execute());
  buildInfo = toSignal(this._buildInfoGetUseCase.execute());
  date = new Date();
}
