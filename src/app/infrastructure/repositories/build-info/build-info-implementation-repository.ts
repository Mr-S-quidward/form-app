import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BuildInfoImplementationRepoMapper} from './mappers/build-info-repo.mapper';
import {BuildInfoRepository} from '../../../domain/repositories/build-info.repository';
import {map, Observable, of, switchMap} from 'rxjs';
import {BuildInfoModel} from '../../../domain/models/build-info.model';
import {BuildInfoEntity} from './entities/build-info.entity';

@Injectable({
  providedIn: 'root'
})
export class BuildInfoImplementationRepository extends BuildInfoRepository {
  private readonly httpClient = inject(HttpClient);
  buildInfoMapper = new BuildInfoImplementationRepoMapper();

  override getBuildInfo(): Observable<BuildInfoModel> {
    return this.httpClient.get<BuildInfoEntity>("/build.json").pipe(
      switchMap((value) => of(value)),
      map(this.buildInfoMapper.mapFrom),
    );
  }
}
