import {UseCase} from '../base/use-case';
import {Observable} from 'rxjs';
import {DynamicFormRepository} from '../repositories/dynamic-form.repository';
import {DynamicFormEntity} from '../../infrastructure/repositories/dynamic-form/entities/dynamic-form.entity';
import {DynamicFormModel} from '../models/dynamic-form.model';

export class DynamicFormGetConfigUseCase implements UseCase<undefined, DynamicFormEntity> {
  constructor(private readonly dynamicFormRepository: DynamicFormRepository) {
  }

  execute(): Observable<DynamicFormModel> {
    return this.dynamicFormRepository.getDynamicFormConfig();
  }
}
