import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterializeModule } from 'angular2-materialize';

import { Ng4FilesModule } from 'angular4-files-upload';
import { ClassRoutingModule } from './class-routing.module';

import { ClassComponent } from './class.component';
import { ClassEditComponent } from './class-edit/class-edit.component';
import { ClassListComponent } from './class-list/class-list.component';

@NgModule({
  imports: [
    CommonModule,
    MaterializeModule,
    Ng4FilesModule,
    ReactiveFormsModule,
    RouterModule,
    ClassRoutingModule
  ],
  declarations: [
    ClassComponent,
    ClassEditComponent,
    ClassListComponent
  ],
  exports: [
    ClassComponent,
    ClassEditComponent,
    ClassListComponent
  ]
})
export class ClassModule { }
