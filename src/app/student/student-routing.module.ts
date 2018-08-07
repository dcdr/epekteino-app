import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StudentListComponent } from './student-list/student-list.component';
import { StudentEditComponent } from './student-edit/student-edit.component';

const routes: Routes = [
  { path: 'students', component: StudentListComponent },
  { path: 'students/new', component: StudentEditComponent },
  { path: 'students/:id', component: StudentEditComponent }
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
export class StudentRoutingModule { }
