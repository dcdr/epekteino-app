import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterializeModule } from 'angular2-materialize';

import { Ng4FilesModule } from 'angular4-files-upload';
import { CourseRoutingModule } from './course-routing.module';

import { CourseComponent } from './course.component';
import { CourseEditComponent } from './course-edit/course-edit.component';
import { CourseListComponent } from './course-list/course-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterializeModule,
    Ng4FilesModule,
    ReactiveFormsModule,
    RouterModule,
    CourseRoutingModule
  ],
  declarations: [
    CourseComponent,
    CourseEditComponent,
    CourseListComponent
  ],
  exports: [
    CourseComponent,
    CourseEditComponent,
    CourseListComponent
  ]
})
export class CourseModule { }
