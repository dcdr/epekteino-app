import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

import { BaseEditComponent } from '../../base-edit.component';

import { Classroom } from '../../models';
import { ClassroomService } from '../../services';

@Component({
  selector: 'app-classroom-edit',
  templateUrl: './classroom-edit.component.html',
  styles: ['']
})
export class ClassroomEditComponent extends BaseEditComponent<Classroom, ClassroomService>  implements OnInit {  
  get editTitle(): string { return 'Edit requirement'; }
  get newTitle(): string { return 'New requirement'; }

  constructor(route: ActivatedRoute, router: Router, classroomService: ClassroomService, fb: FormBuilder) {
    super(route, router, classroomService, fb, Classroom);
  }

  ngOnInit() {
    super.ngOnInit();
  }

  formGroupConfig(item: Classroom): { [key: string]: any; } {
    return {
      name: item.name,
      location: item.location,
      nickname: item.nickname,
      capacity: item.capacity
    };
  }

  updateFromForm(value:any) {
    this.item.name = value.name as string;
    this.item.location = value.location as string;
    this.item.nickname = value.nickname as string;
    this.item.capacity = value.capacity as number;
  }

  navigateToList() {
    this.router.navigate(['classrooms']);
  }
}
