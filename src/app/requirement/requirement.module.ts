import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterializeModule } from 'angular2-materialize';

import { Ng4FilesModule } from 'angular4-files-upload';
import { RequirementRoutingModule } from './requirement-routing.module';

import { RequirementComponent } from './requirement.component';
import { RequirementEditComponent } from './requirement-edit/requirement-edit.component';
import { RequirementListComponent } from './requirement-list/requirement-list.component';

@NgModule({
  imports: [
    CommonModule,
    MaterializeModule,
    Ng4FilesModule,
    ReactiveFormsModule,
    RouterModule,
    RequirementRoutingModule
  ],
  declarations: [
    RequirementComponent,
    RequirementEditComponent,
    RequirementListComponent
  ],
  exports: [
    RequirementComponent,
    RequirementEditComponent,
    RequirementListComponent
  ]
})
export class RequirementModule { }
