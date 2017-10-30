import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './nav/login/login.component';
import { TermComponent } from './term/term.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '/terms', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
