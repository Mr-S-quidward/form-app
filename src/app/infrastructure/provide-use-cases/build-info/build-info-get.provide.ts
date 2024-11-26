import {BuildInfoRepository} from '../../../domain/repositories/build-info.repository';
import {BuildInfoGetUseCase} from '../../../domain/use-cases/build-info-get.usecase';

const buildInfoGetUseCaseFactory =
  (buildInfoRepo: BuildInfoRepository) => new BuildInfoGetUseCase(buildInfoRepo);

export const buildInfoGetUseCaseProvider = {
  provide: BuildInfoGetUseCase,
  useFactory: buildInfoGetUseCaseFactory,
  deps: [BuildInfoRepository],
}
