import { Component, OnInit } from '@angular/core';
import { Ng4FilesStatus, Ng4FilesSelected } from 'angular4-files-upload';
import { RequirementService, FileService } from '../../services';
import { BaseListComponent } from '../../base-list.component';

import { Requirement } from '../../models';

@Component({
  selector: 'app-requirement-list',
  templateUrl: './requirement-list.component.html',
  styles: ['.']
})
export class RequirementListComponent extends BaseListComponent<Requirement, RequirementService> implements OnInit {
  constructor(requirementService: RequirementService, fileService: FileService) { 
    super(requirementService, fileService);
  }

  ngOnInit() {
    super.ngOnInit();
  }
}
