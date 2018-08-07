import { Component, OnInit } from '@angular/core';
import { Ng4FilesStatus, Ng4FilesSelected } from 'angular4-files-upload';
import { InstructorService, FileService } from '../../services';
import { BaseListComponent } from '../../base-list.component';

import { Instructor } from '../../models';

@Component({
  selector: 'app-instructor-list',
  templateUrl: './instructor-list.component.html',
  styles: ['.']
})
export class InstructorListComponent extends BaseListComponent<Instructor, InstructorService> implements OnInit {
  constructor(instructorService: InstructorService, fileService: FileService) { 
    super(instructorService, fileService);
  }

  ngOnInit() {
    super.ngOnInit();
  }
}
