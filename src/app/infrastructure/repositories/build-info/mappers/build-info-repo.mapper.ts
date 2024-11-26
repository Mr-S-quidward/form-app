import {Mapper} from '../../../../base/utils/mapper';
import {BuildInfoEntity} from '../entities/build-info.entity';
import {BuildInfoModel} from '../../../../domain/models/build-info.model';

export class BuildInfoImplementationRepoMapper extends Mapper<BuildInfoEntity, BuildInfoModel> {
  override mapFrom(param: BuildInfoEntity): BuildInfoModel {
    return param
  }

  override mapTo(param: BuildInfoModel): BuildInfoEntity {
    return param;
  }
}
