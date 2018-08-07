import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { ClassModule } from './class/class.module';
import { ClassroomModule } from './classroom/classroom.module';
import { CourseModule } from './course/course.module';
import { InstructorModule } from './instructor/instructor.module';
import { NavModule } from './nav/nav.module';
import { RequirementModule } from './requirement/requirement.module';
import { ServicesModule } from './services/services.module';
import { StudentModule } from './student/student.module';
import { TermModule } from './term/term.module';

import { AppComponent } from './app.component';
import { ChecklistComponent } from './checklist/checklist.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NavModule,
    ServicesModule.forRoot(),
    ClassModule,
    ClassroomModule,
    CourseModule,
    InstructorModule,
    RequirementModule,
    StudentModule,
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
