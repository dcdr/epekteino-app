import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InstructorListComponent } from './instructor-list/instructor-list.component';
import { InstructorEditComponent } from './instructor-edit/instructor-edit.component';

const routes: Routes = [
  { path: 'instructors', component: InstructorListComponent },
  { path: 'instructors/new', component: InstructorEditComponent },
  { path: 'instructors/:id', component: InstructorEditComponent }
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
export class InstructorRoutingModule { }
