import {UseCase} from '../base/use-case';
import {DynamicFormModel} from '../models/dynamic-form.model';
import {Observable} from 'rxjs';
import {DynamicFormRepository} from '../repositories/dynamic-form.repository';

export class DynamicFormGetConfigUseCase implements UseCase<undefined, DynamicFormModel> {
  constructor(private readonly dynamicFormRepository: DynamicFormRepository) {
  }

  execute(): Observable<DynamicFormModel> {
    return this.dynamicFormRepository.getDynamicFormConfig();
  }
}
