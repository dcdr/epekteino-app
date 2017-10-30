import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

import { BaseEditComponent } from '../../base-edit.component';

import { Instructor } from '../../models';
import { InstructorService } from '../../services';

@Component({
  selector: 'app-instructor-edit',
  templateUrl: './instructor-edit.component.html',
  styles: ['']
})
export class InstructorEditComponent extends BaseEditComponent<Instructor, InstructorService> implements OnInit {
  get editTitle(): string { return 'Edit instructor'; }
  get newTitle(): string { return 'New instructor'; }
  titles = ['Mrs.', 'Ms.', 'Mr.', 'Dr.'];
  
  constructor(route: ActivatedRoute, router: Router, instructorService: InstructorService, fb: FormBuilder) {
    super(route, router, instructorService, fb, Instructor);
  }
  
  ngOnInit() {
    super.ngOnInit();
  }

  formGroupConfig(item: Instructor): { [key: string]: any; } {
    return {
      givenName: item.givenName,
      familyName: item.familyName,
      title: item.title
    };
  }

  updateFromForm(value:any) {
    this.item.givenName = value.givenName as string;
    this.item.familyName = value.familyName as string;
    this.item.title = value.title as string;
  }

  navigateToList() {
    this.router.navigate(['instructors']);
  }
}
