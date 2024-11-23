import {Injectable} from '@angular/core';
import {delay, Observable, of} from 'rxjs';
import {FormConfigModel} from '../../models/form-config.model';
import {FormConfigConst} from '../../consts/form-config.const';

@Injectable({
  providedIn: 'root'
})
export class MockApiFormService {
  getFormConfig(): Observable<FormConfigModel> {
    return of(FormConfigConst).pipe(delay(1000));
  }
}
