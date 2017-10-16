import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import * as moment from 'moment';

import { Term } from '../../models/term.model';
import { TermService } from '../../services/term.service';

declare let $: any;

@Component({
  selector: 'app-edit-term',
  templateUrl: './edit-term.component.html',
  styleUrls: ['./edit-term.component.scss']
})
export class EditTermComponent implements OnInit {
  term: Term;
  termForm: FormGroup;
  
  constructor(private termService: TermService/*, private router: Router*/, private fb: FormBuilder) {
    this.createForm(new Term());
  }

  ngOnInit() {

    $('.modal').modal();
    $('.datepicker').pickadate({
      selectMonths: true, // Creates a dropdown to control month
      selectYears: 15, // Creates a dropdown of 15 years to control year,
      today: 'Today',
      clear: 'Clear',
      close: 'Ok',
      closeOnSelect: false // Close upon selecting a date,
    });
  }


  addTerm() {
    this.editTerm(new Term());
  }

  editTerm(term: Term) {
    this.createForm(term);
    $('#editTerm').modal('open');
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
    $('#editTerm').modal('close');
//    this.router.navigateByUrl('/dashboard');
  }

  cancel() {
    $('#editTerm').modal('close');
  }

  private updateTerm() {
    const formModel = this.termForm.value;
    this.term.name = formModel.name as string;
    this.term.startDate = moment(formModel.starts);
    this.term.endDate = moment(formModel.endDate);
    this.term.registrationOpens = moment(formModel.open);
    this.term.registrationCloses = moment(formModel.close);
  }
}
