import { Injectable, Inject, InjectionToken } from '@angular/core';
import { ConnectableObservable, Observable, Observer, Subject } from 'rxjs';
import { UUID } from 'angular2-uuid';

import { BaseService } from './base.service';

import { Student } from '../models';

export let STUDENT_STORE = new InjectionToken('STUDENT_STORE');

@Injectable()
export class StudentService extends BaseService<Student>  {

  constructor(@Inject(STUDENT_STORE) storageKey: string) {
    super(storageKey, Student);
  }
}
