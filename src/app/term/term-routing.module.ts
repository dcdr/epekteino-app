import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TermComponent } from './term.component';
import { TermListComponent } from './term-list/term-list.component';
import { TermEditComponent } from './term-edit/term-edit.component';

const termRoutes: Routes = [
  { path: 'terms', component: TermListComponent },
  { path: 'terms/new', component: TermEditComponent },
  { path: 'terms/:id', component: TermEditComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(
      termRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class TermRoutingModule { }
