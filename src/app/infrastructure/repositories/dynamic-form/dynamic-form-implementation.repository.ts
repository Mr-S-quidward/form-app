import {Injectable} from '@angular/core';
import {DynamicFormRepository} from '../../../domain/repositories/dynamic-form.repository';
import {DynamicFormImplementationRepoMapper} from './mappers/dynamic-form-repo.mapper';
import {delay, map, Observable, of} from 'rxjs';
import {DynamicFormModel} from '../../../domain/models/dynamic-form.model';
import {FormConfigConst} from '../../../domain/consts/form-config.const';

@Injectable({
  providedIn: 'root'
})
export class DynamicFormImplementationRepository extends DynamicFormRepository {
  dynamicFormMapper = new DynamicFormImplementationRepoMapper();

  override getDynamicFormConfig(): Observable<DynamicFormModel> {
    return of(FormConfigConst).pipe(
      delay(1000),
      map(this.dynamicFormMapper.mapFrom),
    );
  }
}
