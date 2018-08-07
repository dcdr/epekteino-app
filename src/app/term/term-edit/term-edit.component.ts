import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import * as moment from 'moment';

import { TermService } from '../../services';
import { Term } from '../../models';

// declare let $: any;

@Component({
  selector: 'app-term-edit',
  templateUrl: './term-edit.component.html',
  styleUrls: ['./term-edit.component.scss']
})
export class TermEditComponent implements OnInit {
  title: string;
  term: Term;
  termForm: FormGroup;

  constructor(private route: ActivatedRoute, private router: Router, private termService: TermService, private fb: FormBuilder) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (!!params.id) {
        this.title = 'Edit Term';
        this.termService.getOne(params.id).subscribe(term => {
          this.createForm(term);
        });
      }
      else {
        this.title = 'New Term';
        this.createForm(new Term());
      }
   });
  }

  createForm(term: Term) {
    this.term = term;
    this.termForm = this.fb.group({
      name: term.name,
      start: term.startDate,
      end: term.endDate,
      open: term.registrationOpens,
      close: term.registrationCloses
    });
  }

  saveTerm() {
    this.updateTerm();
    if (!this.term.id) {
      this.termService.saveTerm(this.term);
    }
    else {
      this.termService.updateTerm(this.term);
    }
    this.router.navigate(['terms']);
  }

  private updateTerm() {
    const formModel = this.termForm.value;
    this.term.name = formModel.name as string;
    this.term.startDate = moment(formModel.start);
    this.term.endDate = moment(formModel.end);
    this.term.registrationOpens = moment(formModel.open);
    this.term.registrationCloses = moment(formModel.close);
  }
}
