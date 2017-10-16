import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { NavModule } from './nav/nav.module';
import { ServicesModule } from './services/services.module';
import { TermModule } from './term/term.module';

import { AppComponent } from './app.component';
import { ChecklistComponent } from './checklist/checklist.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NavModule,
    ServicesModule,
    TermModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    ChecklistComponent
  ],
  providers: [
  ],
  bootstrap: [ 
    AppComponent
  ]
})
export class AppModule { }
