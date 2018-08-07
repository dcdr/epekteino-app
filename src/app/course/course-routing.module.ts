import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CourseListComponent } from './course-list/course-list.component';
import { CourseEditComponent } from './course-edit/course-edit.component';

const routes: Routes = [
  { path: 'courses', component: CourseListComponent },
  { path: 'courses/new', component: CourseEditComponent },
  { path: 'courses/:id', component: CourseEditComponent }
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
export class CourseRoutingModule { }
