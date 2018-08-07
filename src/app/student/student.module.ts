import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterializeModule } from 'angular2-materialize';

import { Ng4FilesModule } from 'angular4-files-upload';
import { StudentRoutingModule } from './student-routing.module';

import { StudentComponent } from './student.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { StudentListComponent } from './student-list/student-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterializeModule,
    Ng4FilesModule,
    ReactiveFormsModule,
    RouterModule,
    StudentRoutingModule
  ],
  declarations: [
    StudentComponent,
    StudentEditComponent,
    StudentListComponent
  ],
  exports: [
    StudentComponent,
    StudentEditComponent,
    StudentListComponent
  ]
})
export class StudentModule { }
