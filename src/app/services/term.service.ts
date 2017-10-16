import { Injectable, Inject, InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import { UUID } from 'angular2-uuid';

import { Term } from '../models/term.model';

export let TERM_STORE = new InjectionToken('TERM_STORE');

@Injectable()
export class TermService {
  constructor(@Inject(TERM_STORE) private storageKey: string) { }

  getTerms(): Observable<Term[]> {
    return Observable.of(this.loadTerms());
  }

  saveTerm(term: Term) {
    let terms = this.loadTerms();
    term.id = UUID.UUID();
    terms.push(term);
    this.saveTerms(terms);
  }

  updateTerm(term: Term) {
    let terms = this.loadTerms();
    for(let i=0; i<terms.length; i++) {
      if (terms[i].id === term.id) {
        terms[i] = term;
        this.saveTerms(terms);
        break;
      }
    }
  }

  deleteTerm(term: Term) {
    let terms = this.loadTerms();
    for(let i=0; i<terms.length; i++) {
      if (terms[i].id === term.id) {
        terms.splice(i, 1);
        this.saveTerms(terms);
        break;
      }
    }
  }

  private saveTerms(terms: Term[]) {
    if (typeof Storage !== 'undefined') {
      localStorage.setItem(this.storageKey, JSON.stringify(terms));
    }
  }

  private loadTerms(): Term[] {
    let terms = new Array<Term>();
    if (typeof Storage !== 'undefined') {
      const info = JSON.parse(localStorage.getItem(this.storageKey)) as Array<any>;
      if (!!info) {
        info.forEach(t => {
          const term = new Term();
          term.name = t.name;
          term.startDate = moment(t.startDate);
          term.endDate = moment(t.endDate);
          term.registrationOpens = moment(t.registrationOpens);
          term.registrationCloses = moment(t.registrationCloses);
          terms.push(term);
        });
      }
    }
    return terms;
  }
}
