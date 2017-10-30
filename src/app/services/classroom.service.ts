import { Injectable, Inject, InjectionToken } from '@angular/core';
import { ConnectableObservable, Observable, Observer, Subject } from 'rxjs';
import { UUID } from 'angular2-uuid';

import { BaseService } from './base.service';

import { Classroom } from '../models/classroom.model';

export let CLASSROOM_STORE = new InjectionToken('CLASSROOM_STORE');

@Injectable()
export class ClassroomService extends BaseService<Classroom> {

  constructor(@Inject(CLASSROOM_STORE) storageKey: string) {
    super(storageKey, Classroom);
  }

}
