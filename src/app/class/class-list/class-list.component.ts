import { Component, OnInit } from '@angular/core';
import { Ng4FilesStatus, Ng4FilesSelected } from 'angular4-files-upload';
import { ClassService, FileService, CourseService, InstructorService, ClassroomService } from '../../services';
import { BaseListComponent } from '../../base-list.component';

import { Class } from '../../models';

@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
  styles: ['']
})
export class ClassListComponent extends BaseListComponent<Class, ClassService> implements OnInit {
  private courseNames: {[key:string]:string};
  private instructorNames: {[key:string]:string};
  private classroomNames: {[key:string]:string};

  constructor(classService: ClassService, fileService: FileService, courseService: CourseService,
              instructorService: InstructorService, classroomService: ClassroomService) { 
    super(classService, fileService);

    this.courseNames = {};
    courseService.getAll().toArray().subscribe(courses => {
      courses.forEach(course => {
        this.courseNames[course.id] = course.name;
      })
    });
    
    this.instructorNames = {};
    instructorService.getAll().toArray().subscribe(instructors => {
      instructors.forEach(instructor => {
        this.instructorNames[instructor.id] = `${instructor.title} ${instructor.familyName}`;
      })
    });
    
    this.classroomNames = {};
    classroomService.getAll().toArray().subscribe(classrooms => {
      classrooms.forEach(classroom => {
        this.classroomNames[classroom.id] = classroom.name;
      })
    });
  }

  ngOnInit() {
    super.ngOnInit();
  }

  getCourseName(id: string): string {
    return this.courseNames[id];
  }

  getInstructorName(id: string): string {
    return this.instructorNames[id];
  }

  getClassroomName(id: string): string {
    return this.classroomNames[id];
  }
}
