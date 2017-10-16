import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthService } from '../services/auth.service';
import { DashboardComponent } from './dashboard.component';
import { RegistrarDashboardComponent } from './registrar-dashboard/registrar-dashboard.component';
import { InstructorDashboardComponent } from './instructor-dashboard/instructor-dashboard.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { TermsComponent } from './terms/terms.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    DashboardComponent,
    RegistrarDashboardComponent,
    InstructorDashboardComponent,
    StudentDashboardComponent,
    TermsComponent
  ],
  exports: [
    DashboardComponent,
    RegistrarDashboardComponent,
    InstructorDashboardComponent,
    StudentDashboardComponent,
    TermsComponent
  ],
  providers: [
    AuthService
  ]
})
export class DashboardModule{}