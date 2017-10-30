import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

import { BaseEditComponent } from '../../base-edit.component';

import { Course } from '../../models';
import { CourseService } from '../../services';

@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styles: ['']
})
export class CourseEditComponent extends BaseEditComponent<Course, CourseService> implements OnInit {
  get editTitle(): string { return 'Edit course'; }
  get newTitle(): string { return 'New course'; }
  subjects: Array<{ name: string; value: string}>;
  
  constructor(route: ActivatedRoute, router: Router, courseService: CourseService, fb: FormBuilder) {
    super(route, router, courseService, fb, Course);
  }
  
  ngOnInit() {
    super.ngOnInit();
    this.subjects = [];
    Course.subjects.forEach((v,i,a) => {
      this.subjects.push({name: v, value: v});
    });
  }

  formGroupConfig(item: Course): { [key: string]: any; } {
    return {
      name: item.name,
      subject: item.subject,
      description: item.description,
      credits: item.credits
    };
  }

  updateFromForm(value:any) {
    this.item.name = value.name as string;
    this.item.subject = value.subject as string;
    this.item.description = value.description as string;
    this.item.credits = value.credits as number;
  }

  navigateToList() {
    this.router.navigate(['courses']);
  }
}
