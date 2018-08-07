import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesModule } from '../services/services.module';

import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav.component';

@NgModule({
  imports: [
    CommonModule,
    ServicesModule
  ],
  declarations: [
    LoginComponent,
    NavComponent
  ],
  exports: [
    LoginComponent,
    NavComponent
  ]
})
export class NavModule{}