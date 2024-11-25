import {Observable} from 'rxjs';
import {DynamicFormModel} from '../models/dynamic-form.model';

export abstract class DynamicFormRepository {
  abstract getDynamicFormConfig(): Observable<DynamicFormModel>;
}
