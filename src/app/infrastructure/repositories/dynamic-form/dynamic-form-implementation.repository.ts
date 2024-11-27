import {inject, Injectable} from '@angular/core';
import {DynamicFormRepository} from '../../../domain/repositories/dynamic-form.repository';
import {DynamicFormImplementationRepoMapper} from './mappers/dynamic-form-repo.mapper';
import {delay, map, Observable, of, switchMap} from 'rxjs';
import {DynamicFormModel} from '../../../domain/models/dynamic-form.model';
import {HttpClient} from '@angular/common/http';
import {DynamicFormEntity} from './entities/dynamic-form.entity';

@Injectable({
  providedIn: 'root'
})
export class DynamicFormImplementationRepository extends DynamicFormRepository {
  httpClient = inject(HttpClient);
  dynamicFormMapper = new DynamicFormImplementationRepoMapper();

  override getDynamicFormConfig(): Observable<DynamicFormModel> {
    return this.httpClient.get<DynamicFormEntity>("/form-config.json").pipe(
      delay(2000),
      switchMap((value) => of(value)),
      map((value)=>this.dynamicFormMapper.mapFrom(value)),
    );
  }
}
