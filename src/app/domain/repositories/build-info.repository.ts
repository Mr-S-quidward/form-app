import {Observable} from 'rxjs';
import {BuildInfoModel} from '../models/build-info.model';

export abstract class BuildInfoRepository {
  abstract getBuildInfo(): Observable<BuildInfoModel>;
}
