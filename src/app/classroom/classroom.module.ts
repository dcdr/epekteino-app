import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterializeModule } from 'angular2-materialize';

import { Ng4FilesModule } from 'angular4-files-upload';
import { ClassroomRoutingModule } from './classroom-routing.module';

import { ClassroomComponent } from './classroom.component';
import { ClassroomEditComponent } from './classroom-edit/classroom-edit.component';
import { ClassroomListComponent } from './classroom-list/classroom-list.component';

@NgModule({
  imports: [
    CommonModule,
    MaterializeModule,
    Ng4FilesModule,
    ReactiveFormsModule,
    RouterModule,
    ClassroomRoutingModule
  ],
  declarations: [
    ClassroomComponent,
    ClassroomEditComponent,
    ClassroomListComponent
  ],
  exports: [
    ClassroomComponent,
    ClassroomEditComponent,
    ClassroomListComponent
  ]
})
export class ClassroomModule { }
