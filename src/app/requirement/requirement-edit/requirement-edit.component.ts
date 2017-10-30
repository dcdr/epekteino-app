import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

import { BaseEditComponent } from '../../base-edit.component';

import { Requirement } from '../../models';
import { RequirementService } from '../../services';

@Component({
  selector: 'app-requirement-edit',
  templateUrl: './requirement-edit.component.html',
  styles: ['']
})
export class RequirementEditComponent extends BaseEditComponent<Requirement, RequirementService> implements OnInit {
  get editTitle(): string { return 'Edit requirement'; }
  get newTitle(): string { return 'New requirement'; }
  
  constructor(route: ActivatedRoute, router: Router, requirementService: RequirementService, fb: FormBuilder) {
    super(route, router, requirementService, fb, Requirement);
  }
  
  ngOnInit() {
    super.ngOnInit();
  }

  formGroupConfig(item: Requirement): { [key: string]: any; } {
    return {
      name: item.name,
      description: item.description
    };
  }

  updateFromForm(value:any) {
    this.item.name = value.name as string;
    this.item.description = value.description as string;
  }

  navigateToList() {
    this.router.navigate(['requirements']);
  }
}
