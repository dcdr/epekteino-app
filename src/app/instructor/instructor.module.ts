import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterializeModule } from 'angular2-materialize';

import { Ng4FilesModule } from 'angular4-files-upload';
import { InstructorRoutingModule } from './instructor-routing.module';

import { InstructorComponent } from './instructor.component';
import { InstructorEditComponent } from './instructor-edit/instructor-edit.component';
import { InstructorListComponent } from './instructor-list/instructor-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterializeModule,
    Ng4FilesModule,
    ReactiveFormsModule,
    RouterModule,
    InstructorRoutingModule
  ],
  declarations: [
    InstructorComponent,
    InstructorEditComponent,
    InstructorListComponent
  ],
  exports: [
    InstructorComponent,
    InstructorEditComponent,
    InstructorListComponent
  ]
})
export class InstructorModule { }
