import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClassroomListComponent } from './classroom-list/classroom-list.component';
import { ClassroomEditComponent } from './classroom-edit/classroom-edit.component';

const classroomRoutes: Routes = [
  { path: 'classrooms', component: ClassroomListComponent },
  { path: 'classrooms/new', component: ClassroomEditComponent },
  { path: 'classrooms/:id', component: ClassroomEditComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(
      classroomRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class ClassroomRoutingModule { }
