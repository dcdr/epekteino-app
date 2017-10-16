import { Component, OnInit, EventEmitter } from '@angular/core';
import * as moment from 'moment';

import { TermService } from '../../services';
import { Term } from '../../models';

@Component({
  selector: 'app-term-list',
  templateUrl: './term-list.component.html',
  styleUrls: ['./term-list.component.scss']
})
export class TermListComponent implements OnInit {
  terms: Array<Term>;
  current: Term;

  constructor(private termService: TermService) {
    this.termService.current.subscribe(term => { 
      this.current = term;
    });
  }

  ngOnInit() {
    this.loadTerms();
  }

  // Get all terms in reverse chronological order by start date.
  loadTerms() {
    this.termService.getAll().toArray().subscribe(terms => { 
      this.terms = terms.sort((a: Term, b: Term): number =>  { 
        return a.startDate.isBefore(b.startDate) ? 1 :
          a.startDate.isSame(b.startDate) ? 0 : -1; 
      }); 
    });
  }

  shortDate(date: moment.Moment): string {
    return date.format('LL');
  }

  onSetCurrent(term: Term) {
    this.termService.setCurrent(term);
  }

  isCurrent(term: Term) {
    return this.current === term;
  }

  onDelete(term: Term) {
    if (term === this.current) {
      this.onSetCurrent(null);
    }
    this.termService.deleteTerm(term);
    this.loadTerms();
  }

  openRegistration(term: Term) {
    term.openRegistration();
    this.termService.updateTerm(term);
    this.loadTerms();
  }

  closeRegistration(term: Term) {
    term.closeRegistration();
    this.termService.updateTerm(term);
    this.loadTerms();
  }
}
