import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

import { BaseEditComponent } from '../../base-edit.component';

import { Class, Course, Classroom, Instructor, Term } from '../../models';
import { ClassService, CourseService, InstructorService, ClassroomService, TermService} from '../../services';

@Component({
  selector: 'app-class-edit',
  templateUrl: './class-edit.component.html',
  styles: ['']
})
export class ClassEditComponent extends BaseEditComponent<Class, ClassService>  implements OnInit {  
  private courses: Array<Course>;
  private instructors: Array<Instructor>;
  private classrooms: Array<Classroom>;
  private periods = Class.periods;

  get editTitle(): string { return 'Edit class'; }
  get newTitle(): string { return 'New class'; }

  constructor(route: ActivatedRoute, router: Router, classService: ClassService, fb: FormBuilder, courseService: CourseService,
    private instructorService: InstructorService, private classroomService: ClassroomService, private termService: TermService) {
    super(route, router, classService, fb, Class);

    courseService.getAll().toArray().subscribe(courses => {
      this.courses = courses;
    });
    
    instructorService.getAll().toArray().subscribe(instructors => {
      this.instructors = instructors;
    });
    
    classroomService.getAll().toArray().subscribe(classrooms => {
      this.classrooms = classrooms;
    });
  }

  ngOnInit() {
    super.ngOnInit();
  }

  formGroupConfig(item: Class): { [key: string]: any; } {
    if (!item.term && !!this.termService.current) {
      item.term = this.termService.current.id;
    }
    return {
      period: item.period,
      course: item.course,
      term: item.term,
      instructor: item.instructor,
      classroom: item.classroom,
      capacity: item.capacity
    };
  }

  updateFromForm(value:any) {
    this.item.period = value.period as string;
    this.item.course = value.course as string;
    this.item.term = value.term as string;
    this.item.instructor = value.instructor as string;
    this.item.classroom = value.classroom as string;
    this.item.capacity = value.capacity as number;
  }

  navigateToList() {
    this.router.navigate(['classes']);
  }

  getInstructorName(instructor: Instructor): string {
    return `${instructor.title} ${instructor.familyName}`;
  }
}
