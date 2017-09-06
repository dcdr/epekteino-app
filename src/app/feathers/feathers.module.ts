import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeathersService } from './feathers.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    FeathersService
  ],
  declarations: [
  ]
})
export class FeathersModule { }
