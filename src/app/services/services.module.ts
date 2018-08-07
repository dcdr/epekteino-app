import { NgModule, ModuleWithProviders } from '@angular/core';

import { AuthService, AUTH_STORE } from './auth.service';
import { ClassService, CLASS_STORE } from './class.service';
import { ClassroomService, CLASSROOM_STORE } from './classroom.service';
import { CourseService, COURSE_STORE } from './course.service';
import { InstructorService, INSTRUCTOR_STORE } from './instructor.service';
import { FileService } from './file.service';
import { RequirementService, REQUIREMENT_STORE } from './requirement.service';
import { StudentService, STUDENT_STORE } from './student.service';
import { TermService, TERM_STORE } from './term.service';
import { FeathersService } from './feathers.service';

@NgModule({
  imports: [
  ],
  providers: [
    FeathersService,
    AuthService,
    ClassService,
    ClassroomService,
    CourseService,
    FileService,
    InstructorService,
    RequirementService,
    StudentService,
    TermService,
    { provide: AUTH_STORE, useValue: 'user' },
    { provide: CLASS_STORE, useValue: 'classs' },
    { provide: CLASSROOM_STORE, useValue: 'classrooms' },
    { provide: COURSE_STORE, useValue: 'courses' },
    { provide: INSTRUCTOR_STORE, useValue: 'instructors' },
    { provide: REQUIREMENT_STORE, useValue: 'requirements' },
    { provide: STUDENT_STORE, useValue: 'students' },
    { provide: TERM_STORE, useValue: 'terms' }
  ],
  declarations: [
  ]
})
export class ServicesModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ServicesModule,
      providers: [
        TermService
      ]
    };
  }
}