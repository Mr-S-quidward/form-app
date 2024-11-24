import {Component, inject} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {toSignal} from '@angular/core/rxjs-interop';
import {DynamicFormComponent} from './presentation/dynamic-form/dynamic-form.component';
import {FormService} from './infrastructure/services/forms/form.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DynamicFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'form-app';
  formService = inject(FormService);
  formConfigSignal = toSignal(this.formService.getFormConfig());
}
