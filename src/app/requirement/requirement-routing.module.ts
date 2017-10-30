import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RequirementListComponent } from './requirement-list/requirement-list.component';
import { RequirementEditComponent } from './requirement-edit/requirement-edit.component';

const routes: Routes = [
  { path: 'requirements', component: RequirementListComponent },
  { path: 'requirements/new', component: RequirementEditComponent },
  { path: 'requirements/:id', component: RequirementEditComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(
      routes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class RequirementRoutingModule { }
