import { Injectable, Inject, InjectionToken } from '@angular/core';
import { ConnectableObservable, Observable, Observer, Subject } from 'rxjs';
import { UUID } from 'angular2-uuid';

import { BaseService } from './base.service';

import { Course } from '../models';

export let COURSE_STORE = new InjectionToken('COURSE_STORE');

@Injectable()
export class CourseService extends BaseService<Course>  {

  constructor(@Inject(COURSE_STORE) storageKey: string) {
    super(storageKey, Course);
  }
}
