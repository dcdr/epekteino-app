import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

import { BaseEditComponent } from '../../base-edit.component';

import { Student } from '../../models';
import { StudentService } from '../../services';

import * as moment from 'moment';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styles: ['']
})
export class StudentEditComponent extends BaseEditComponent<Student, StudentService> implements OnInit {
  get editTitle(): string { return 'Edit student'; }
  get newTitle(): string { return 'New student'; }
  classes = Student.classes;
  dateOptions = this.getDefaultDateOptions();
  
  constructor(route: ActivatedRoute, router: Router, StudentService: StudentService, fb: FormBuilder) {
    super(route, router, StudentService, fb, Student);
  }
  
  ngOnInit() {
    super.ngOnInit();
  }

  formGroupConfig(item: Student): { [key: string]: any; } {
    return {
      givenName: item.givenName,
      familyName: item.familyName,
      birthdate: item.birthdate,
      transcript: item.transcript,
      credits: item.credits,
      class: item.class
    };
  }

  updateFromForm(value:any) {
    this.item.givenName = value.givenName as string;
    this.item.familyName = value.familyName as string;
    this.item.birthdate = moment(value.birthdate);
    this.item.transcript = value.transcript as Array<string>;
    this.item.credits = value.credits as number;
    this.item.class = value.class as string;
  }

  navigateToList() {
    this.router.navigate(['students']);
  }

  getDefaultDateOptions(): any {
    return {
      format: 'mmmm d, yyyy',
      formatSubmit: 'yyyy-mm-dd',
      selectYears: 16,
      selectMonths: true
    };
  }
}
