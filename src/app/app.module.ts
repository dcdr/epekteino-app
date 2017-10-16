import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { ServicesModule } from './services/services.module';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { SettingsComponent } from './nav/settings/settings.component';

@NgModule({
  imports: [
    BrowserModule,
    DashboardModule,
    FormsModule,
    HttpModule,
    ServicesModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    AboutComponent,
    LoginComponent,
    NavComponent,
    SettingsComponent
  ],
  providers: [
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
