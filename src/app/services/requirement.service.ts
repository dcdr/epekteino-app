import { Injectable, Inject, InjectionToken } from '@angular/core';
import { ConnectableObservable, Observable, Observer, Subject } from 'rxjs';
import { UUID } from 'angular2-uuid';

import { BaseService } from './base.service';

import { Requirement } from '../models/requirement.model';

export let REQUIREMENT_STORE = new InjectionToken('REQUIREMENT_STORE');

@Injectable()
export class RequirementService extends BaseService<Requirement>  {

  constructor(@Inject(REQUIREMENT_STORE) storageKey: string) {
    super(storageKey, Requirement);
  }
}
