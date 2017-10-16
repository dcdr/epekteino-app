import { NgModule } from '@angular/core';

import { AuthService, AUTH_STORE } from './auth.service';
import { TermService, TERM_STORE } from './term.service';
import { FeathersService } from './feathers.service';

@NgModule({
  imports: [
  ],
  providers: [
    FeathersService,
    AuthService,
    TermService,
    { provide: AUTH_STORE, useValue: 'user' },
    { provide: TERM_STORE, useValue: 'terms' }
  ],
  declarations: [
  ]
})
export class ServicesModule {}