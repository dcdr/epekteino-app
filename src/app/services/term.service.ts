import { Injectable, Inject, InjectionToken } from '@angular/core';
import { ConnectableObservable, Observable, Observer, Subject } from 'rxjs';
import * as moment from 'moment';
import { UUID } from 'angular2-uuid';

import { Term } from '../models/term.model';

export let TERM_STORE = new InjectionToken('TERM_STORE');

@Injectable()
export class TermService {
  private currentObserver: Observer<Term>;
  private currentSubject: Subject<Term>;
  current: ConnectableObservable<Term>;
  
  constructor(@Inject(TERM_STORE) private storageKey: string) {
    let o = new Observable<Term>(observer => {
      this.currentObserver = observer;
    });
    this.currentSubject = new Subject<Term>();
    this.current = o.multicast(this.currentSubject);
    this.current.connect();
  }

  getAll(): Observable<Term> {
    return this.loadTerms();
  }

  getOne(id: string): Observable<Term> {
    return Observable.create(observer => {
      this.loadTerms().first(term => { return term.id === id; })
      .subscribe(term => {
        observer.next(term);
        observer.complete();
      });
    });
  }

  saveTerm(term: Term) {
    this.loadTerms().toArray().subscribe(terms => {
      term.id = UUID.UUID();
      terms.push(term);
      this.saveTerms(terms);
    });
  }

  updateTerm(term: Term) {
    this.loadTerms().toArray().subscribe(terms => {
      for(let i=0; i<terms.length; i++) {
        if (terms[i].id === term.id) {
          terms[i] = term;
          this.saveTerms(terms);
          break;
        }
      }
    });;
  }

  deleteTerm(term: Term) {
    this.loadTerms()
      .filter(t => { return t.id !== term.id; })
      .toArray().subscribe(newTerms => {
        this.saveTerms(newTerms);
      }
    );
  }

  setCurrent(term: Term) {
    this.currentObserver.next(term);
  }

  private saveTerms(terms: Term[]) {
    if (typeof Storage !== 'undefined') {
      localStorage.setItem(this.storageKey, JSON.stringify(terms));
    }
  }

  private loadTerms(): Observable<Term> {
    return Observable.create(observer => {
      if (typeof Storage !== 'undefined') {
        const now = moment();
        let candidate: Term = null;
        const info = JSON.parse(localStorage.getItem(this.storageKey)) as Array<any>;
        if (!!info) {
          info.forEach(t => {
            const term = new Term(t);
            observer.next(term);
            if (now.isBefore(term.registrationCloses)) {
              if (candidate === null) {
                candidate = term;
              }
              else if (term.startDate.isBefore(candidate.startDate)) {
                candidate = term;
              }
            }
          });
          if (candidate !== null) {
            this.setCurrent(candidate);
          }
        }
      }
      observer.complete();
    });
  }
}
