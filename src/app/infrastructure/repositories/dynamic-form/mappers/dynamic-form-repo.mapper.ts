import {Mapper} from '../../../../base/utils/mapper';
import {DynamicFormEntity} from '../entities/dynamic-form.entity';
import {DynamicFormModel} from '../../../../domain/models/dynamic-form.model';

export class DynamicFormImplementationRepoMapper extends Mapper<DynamicFormEntity, DynamicFormModel> {

  override mapFrom(param: DynamicFormEntity): DynamicFormModel {
    return param;
  }

  override mapTo(param: DynamicFormModel): DynamicFormEntity {
    return param;
  }
}
