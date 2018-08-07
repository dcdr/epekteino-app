import { TestBed, inject } from '@angular/core/testing';

import { TermService, TERM_STORE } from './term.service';
import { Term } from '../models/term.model';

import * as moment from 'moment';

describe('TermService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TermService,
        { provide: TERM_STORE, useValue: 'test-terms' }
      ]
    });
  });

  it('should be created', inject([TermService], (service: TermService) => {
    expect(service).toBeTruthy();
  }));
});

describe('TermService', () => {
  const storageKey = 'test-terms';
  let service: TermService;

  beforeAll(() => {
    this.service = new TermService(storageKey);
  });

  beforeEach(() => {
    const terms = new Array<Term>();
    const term = new Term();
    term.name = 'Spring 2016';
    term.startDate = moment('2016-01-15');
    term.endDate = moment('2016-05-29');
    term.registrationOpens = moment('2016-01-02T12:00:00');
    term.registrationCloses = moment('2016-01-08T00:00:00');
    term.registrationIsOpen = false;
    terms.push(term);
    localStorage.setItem(storageKey, JSON.stringify(terms));
  });

  it('should get initial data', () => {
    this.service.getTerms().subscribe((terms) => {
      expect(terms.length).toBe(1);
      expect(terms[0].name).toBe('Spring 2016');
      });
  })

  it('should save term', () => {
    this.service.getTerms().subscribe((terms) => {
      const initialTermCount = terms.length;
      const term = new Term();
      term.name = 'Fall 2017';
      term.startDate = moment('2017-08-30');
      term.endDate = moment('2018-01-14');
      term.registrationOpens = moment('2017-08-16T12:00:00');
      term.registrationCloses = moment('2017-08-22T00:00:00');
      term.registrationIsOpen = false;
      this.service.saveTerm(term)
  
      this.service.getTerms().subscribe((terms) => {
        expect(terms.length - initialTermCount).toBe(1);
        expect(terms.some((t) => {return t.name === 'Fall 2017'})).toBeTruthy();
        });
    });
  });
});
