import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClassListComponent } from './class-list/class-list.component';
import { ClassEditComponent } from './class-edit/class-edit.component';

const routes: Routes = [
  { path: 'classes', component: ClassListComponent },
  { path: 'classes/new', component: ClassEditComponent },
  { path: 'classes/:id', component: ClassEditComponent }
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
export class ClassRoutingModule { }
