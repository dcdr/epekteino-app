import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterializeModule } from 'angular2-materialize';

import { TermRoutingModule } from './term-routing.module';

import { TermComponent } from './term.component';
import { TermListComponent } from './term-list/term-list.component';
import { TermEditComponent } from './term-edit/term-edit.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterializeModule,
    RouterModule,
    ReactiveFormsModule,
    TermRoutingModule
  ],
  declarations: [
    TermComponent,
    TermListComponent,
    TermEditComponent
  ],
  exports: [
    TermComponent,
    TermListComponent,
    TermEditComponent
  ]
})
export class TermModule {}
