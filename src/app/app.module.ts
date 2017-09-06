import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { FeathersModule } from './feathers/feathers.module';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';

const appRoutes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    NavComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FeathersModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
    // other imports here
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
