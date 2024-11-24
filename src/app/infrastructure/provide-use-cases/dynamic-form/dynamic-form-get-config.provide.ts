import {DynamicFormRepository} from '../../../domain/repositories/dynamic-form.repository';
import {DynamicFormGetConfigUseCase} from '../../../domain/use-cases/dynamic-form-get-config.usecase';

const dynamicFormGetConfigUseCaseFactory =
  (dynamicFormRepo: DynamicFormRepository) => new DynamicFormGetConfigUseCase(dynamicFormRepo);

export const dynamicFormGetConfigUseCaseProvider = {
  provide: DynamicFormGetConfigUseCase,
  useFactory: dynamicFormGetConfigUseCaseFactory,
  deps: [DynamicFormRepository],
}
