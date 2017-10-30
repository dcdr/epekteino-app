import { Injectable, Inject, InjectionToken } from '@angular/core';
import { ConnectableObservable, Observable, Observer, Subject } from 'rxjs';
import { UUID } from 'angular2-uuid';

import { BaseService } from './base.service';

import { Instructor } from '../models';

export let INSTRUCTOR_STORE = new InjectionToken('INSTRUCTOR_STORE');

@Injectable()
export class InstructorService extends BaseService<Instructor>  {

  constructor(@Inject(INSTRUCTOR_STORE) storageKey: string) {
    super(storageKey, Instructor);
  }
}
