import { Component, OnInit } from '@angular/core';
import { Ng4FilesStatus, Ng4FilesSelected } from 'angular4-files-upload';
import { CourseService, FileService } from '../../services';
import { BaseListComponent } from '../../base-list.component';

import { Course } from '../../models';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styles: ['.']
})
export class CourseListComponent extends BaseListComponent<Course, CourseService> implements OnInit {
  constructor(courseService: CourseService, fileService: FileService) { 
    super(courseService, fileService);
  }

  ngOnInit() {
    super.ngOnInit();
  }
}
