import { Injectable, Inject, InjectionToken } from '@angular/core';
import { ConnectableObservable, Observable, Observer, Subject } from 'rxjs';
import { UUID } from 'angular2-uuid';

import { BaseService } from './base.service';

import { Class } from '../models/class.model';

export let CLASS_STORE = new InjectionToken('CLASS_STORE');

@Injectable()
export class ClassService extends BaseService<Class> {

  constructor(@Inject(CLASS_STORE) storageKey: string) {
    super(storageKey, Class);
  }
}
