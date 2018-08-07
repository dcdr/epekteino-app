import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import * as Excel from 'exceljs/dist/es5/exceljs.browser';
import { saveAs } from 'file-saver';

import { ClassService } from '../services/class.service';
import { ClassroomService } from '../services/classroom.service';
import { CourseService } from '../services/course.service';
import { InstructorService } from '../services/instructor.service';
import { RequirementService } from '../services/requirement.service';
import { StudentService } from '../services/student.service';
import { Class, Classroom, Course, Instructor, Requirement, Student, Term } from '../models';

function s2ab(s: string): ArrayBuffer {
	const buf: ArrayBuffer = new ArrayBuffer(s.length);
	const view: Uint8Array = new Uint8Array(buf);
	for (let i = 0; i !== s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
	return buf;
}

@Injectable()
export class FileService {
  constructor(@Inject(ClassroomService) private classroomService: ClassroomService, @Inject(RequirementService) private requirementService: RequirementService,
    @Inject(CourseService)private courseService: CourseService, @Inject(InstructorService) private instructorService: InstructorService, 
    @Inject(StudentService) private studentService: StudentService, @Inject(ClassService) private classService: ClassService) {
  }

  upload(files: FileList): Observable<boolean> {
    return Observable.create(observer => {
      var myReader = new FileReader();
      myReader.onloadend = function(e){
        let wb = new Excel.Workbook();
        wb.xlsx.load(myReader.result)
        .then(function(wb2) {

          let classrooms = wb2.getWorksheet('Classrooms');
          classrooms.eachRow(function(row, rowNumber) {
            let [ empty, id, name, location, nickname, capacity] = row.values;
            let classroom: Classroom = { id: id, name: name, location: location, nickname: nickname, capacity: capacity };
            if (!id) {
              this.classroomService.update(classroom);
            }
            else {
              this.classroomService.save(classroom);
            }
          });

          let requirements = wb2.getWorksheet('requirements');
          requirements.eachRow(function(row, rowNumber) {
            let [ empty, id, name, description] = row.values;
            let requirement: Requirement = { id: id, name: name, description: description };
            if (!id) {
              this.requirementService.update(requirement);
            }
            else {
              this.requirementService.save(requirement);
            }
          });

          let courses = wb2.getWorksheet('courses');
          courses.eachRow(function(row, rowNumber) {
            let [ empty, id, name, subject, description, prerequisites, credits ] = row.values;
            let course: Course = { id: id, name: name, subject: subject, description: description, prerequisites: prerequisites, credits: credits };
            if (!id) {
              this.courseService.update(course);
            }
            else {
              this.courseService.save(course);
            }
          });

          let instructors = wb2.getWorksheet('instructors');
          instructors.eachRow(function(row, rowNumber) {
            let [ empty, id, title, givenName, familyName ] = row.values;
            let instructor: Instructor = { id: id, title: title, givenName: givenName, familyName: familyName };
            if (!id) {
              this.instructorService.update(instructor);
            }
            else {
              this.instructorService.save(instructor);
            }
          });

          let students = wb2.getWorksheet('students');
          students.eachRow(function(row, rowNumber) {
            let [ empty, id, givenName, familyName, birthdate, transcript, credits, _class ] = row.values;
            let student: Student = { id: id, givenName: givenName, familyName: familyName, birthdate: birthdate, transcript: transcript, credits: credits, class: _class };
            if (!id) {
              this.studentService.update(student);
            }
            else {
              this.istudentService.save(student);
            }
          });
               
          observer.next(true);
          observer.complete();
        });    
      }
  
      myReader.readAsArrayBuffer(files[0]);
    });
  }

  download() {
    let wb = new Excel.Workbook();
    let worksheetsLoaded = 0;
    const expectedSheets = 5;
    let complete = () => { worksheetsLoaded++; }
    
    this.addClassrooms(wb, complete);
    this.addRequirements(wb, complete);
    this.addCourses(wb, complete);
    this.addInstructors(wb, complete);
    this.addStudents(wb, complete);
    // this.addClasses(wb, complete);
    // this.addExtras(wb, complete);
    
    while (worksheetsLoaded < expectedSheets) {
      setTimeout(function(){}, 1000);
    }

    wb.xlsx.writeBuffer()
      .then(function(buffer) {
        saveAs(new Blob([buffer]), 'Registration.xlsx');
      });
  }

  addClassrooms(workbook, complete) {
    var worksheet = workbook.addWorksheet('Classrooms');
    this.setupClassroomWorksheet(worksheet);

    this.classroomService.getAll().subscribe({ next: row => {
      worksheet.addRow(row);
    }, complete: complete });
  }

  setupClassroomWorksheet(worksheet) {
    worksheet.columns = [
      { header: 'Id', key: 'id', width: 10 },
      { header: 'Name', key: 'name', width: 10 },
      { header: 'Location', key: 'location', width: 32 },
      { header: 'Nickname', key: 'nickname', width: 16 },
      { header: 'Capacity', key: 'capacity', width: 8 }
    ];

    let idCol = worksheet.getColumn('id');
    idCol.hidden = true;
  }

  addRequirements(workbook, complete) {
    var worksheet = workbook.addWorksheet('Requirements');
    this.setupRequirementsWorksheet(worksheet);

    this.requirementService.getAll().subscribe({ next: row => {
      worksheet.addRow(row);
    }, complete: complete });
  }

  setupRequirementsWorksheet(worksheet) {
    worksheet.columns = [
      { header: 'Id', key: 'id', width: 10 },
      { header: 'Name', key: 'name', width: 10 },
      { header: 'Description', key: 'description', width: 32 }
    ];

    let idCol = worksheet.getColumn('id');
    idCol.hidden = true;
  }

  addCourses(workbook, complete) {
    var worksheet = workbook.addWorksheet('Courses');
    this.setupCourseWorksheet(worksheet);

    this.courseService.getAll().subscribe({ next: row => {
      worksheet.addRow(row);
    }, complete: complete });
  }

  setupCourseWorksheet(worksheet) {
    worksheet.columns = [
      { header: 'Id', key: 'id', width: 10 },
      { header: 'Name', key: 'name', width: 10 },
      { header: 'Subject', key: 'subject', width: 32 },
      { header: 'Description', key: 'description', width: 16 },
      { header: 'Prerequisites', key: 'prerequisites', width: 16 },
      { header: 'Credits', key: 'credits', width: 8 }
    ];

    let idCol = worksheet.getColumn('id');
    idCol.hidden = true;
  }

  addInstructors(workbook, complete) {
    var worksheet = workbook.addWorksheet('Instructors');
    this.setupInstructorWorksheet(worksheet);

    this.instructorService.getAll().subscribe({ next: row => {
      worksheet.addRow(row);
    }, complete: complete });
  }

  setupInstructorWorksheet(worksheet) {
    worksheet.columns = [
      { header: 'Id', key: 'id', width: 10 },
      { header: 'Title', key: 'title', width: 10 },
      { header: 'GivenName', key: 'givenName', width: 32 },
      { header: 'FamilyName', key: 'familyName', width: 16 }
    ];

    let idCol = worksheet.getColumn('id');
    idCol.hidden = true;
  }

  addStudents(workbook, complete) {
    var worksheet = workbook.addWorksheet('Students');
    this.setupStudentWorksheet(worksheet);

    this.studentService.getAll().subscribe({ next: row => {
      worksheet.addRow(row);
    }, complete: complete });
  }

  setupStudentWorksheet(worksheet) {
    worksheet.columns = [
      { header: 'Id', key: 'id', width: 10 },
      { header: 'GivenName', key: 'givenName', width: 32 },
      { header: 'FamilyName', key: 'familyName', width: 16 },
      { header: 'Birthdate', key: 'birthdate', width: 16 },
      { header: 'Transcript', key: 'transcript', width: 16 },
      { header: 'Credits', key: 'credits', width: 16 },
      { header: 'Class', key: 'class', width: 16 }
    ];

    let idCol = worksheet.getColumn('id');
    idCol.hidden = true;
  }

  // addClasses(workbook, complete) {
  //   var worksheet = workbook.addWorksheet('Classes');
  //   this.setupClassWorksheet(worksheet);

  //   this.classService.getAll().subscribe({ next: row => {
  //     worksheet.addRow(row);
  //   }, complete: complete });
  // }

  // setupClassWorksheet(worksheet) {
  //   worksheet.columns = [
  //     { header: 'Id', key: 'id', width: 10 },
  //     { header: 'Period', key: 'period', width: 10 },
  //     { header: 'Course', key: 'course', width: 32 },
  //     { header: 'Term', key: 'term', width: 16 },
  //     { header: 'Instructor', key: 'instructor', width: 16 },
  //     { header: 'Classroom', key: 'classroom', width: 16 },
  //     { header: 'Capacity', key: 'capacity', width: 16 }
  //   ];

  //   let idCol = worksheet.getColumn('id');
  //   idCol.hidden = true;
  // }

  // addExtras(workbook: Excel.Workbook, complete) {
  //   var worksheet = workbook.addWorksheet('Extras');
  //   Class.periods.forEach(period => {
  //     worksheet.add
  //   });
  // }
}
