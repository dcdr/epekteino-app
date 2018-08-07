import { Component, OnInit } from '@angular/core';
import { Ng4FilesStatus, Ng4FilesSelected } from 'angular4-files-upload';
import { StudentService, FileService } from '../../services';
import { BaseListComponent } from '../../base-list.component';

import { Student } from '../../models';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styles: ['.']
})
export class StudentListComponent extends BaseListComponent<Student, StudentService> implements OnInit {
  constructor(StudentService: StudentService, fileService: FileService) { 
    super(StudentService, fileService);
  }

  ngOnInit() {
    super.ngOnInit();
  }
}
