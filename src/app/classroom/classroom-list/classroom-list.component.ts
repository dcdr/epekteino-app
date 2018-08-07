import { Component, OnInit } from '@angular/core';
import { Ng4FilesStatus, Ng4FilesSelected } from 'angular4-files-upload';
import { BaseListComponent } from '../../base-list.component';
import { ClassroomService, FileService } from '../../services';

import { Classroom } from '../../models';

@Component({
  selector: 'app-classroom-list',
  templateUrl: './classroom-list.component.html',
  styles: ['']
})
export class ClassroomListComponent extends BaseListComponent<Classroom, ClassroomService> implements OnInit {
  constructor(classroomService: ClassroomService, fileService: FileService) {
    super(classroomService, fileService);
   }

  ngOnInit() {
    super.ngOnInit();
  }
}
