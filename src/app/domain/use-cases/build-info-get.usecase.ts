import {UseCase} from '../base/use-case';
import {BuildInfoModel} from '../models/build-info.model';
import {Observable} from 'rxjs';
import {BuildInfoRepository} from '../repositories/build-info.repository';

export class BuildInfoGetUseCase implements UseCase<undefined, BuildInfoModel> {
  constructor(private readonly buildInfoRepository: BuildInfoRepository) {
  }

  execute(): Observable<BuildInfoModel> {
    return this.buildInfoRepository.getBuildInfo();
  }
}
