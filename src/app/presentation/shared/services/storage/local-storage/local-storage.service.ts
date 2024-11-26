import {Injectable} from '@angular/core';
import {StorageInterface} from '../storage.interface';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService implements StorageInterface {
  storage = localStorage;

  get(key: string) {
    return this.storage.getItem(key);
  }

  save(key: string, value: string) {
    this.storage.setItem(key, value);
  }

  remove(key: string) {
    this.storage.removeItem(key);
  }

  clear() {
    this.storage.clear();
  }
}
