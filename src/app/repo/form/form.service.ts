import {inject, Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {FormConfigModel} from '../../models/interfaces/form-config.model';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  private _configUrl = "assets/form.config.json"
  private _httpClient = inject(HttpClient);

  // simulating a dynamic form which comes from the server...
  get(): Observable<FormConfigModel> {
    return this._httpClient.get<FormConfigModel>(this._configUrl);
  }
}
