import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { BaseService, HasId } from './services';

export abstract class BaseEditComponent<Model extends HasId, Service extends BaseService<Model>> implements OnInit {  
  title: string;
  item: Model;
  abstract get editTitle(): string;
  abstract get newTitle(): string;
  protected form: FormGroup;

  constructor(protected route: ActivatedRoute, protected router: Router, protected service: Service, protected fb: FormBuilder, protected factory: new(m?:Model) => Model) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (!!params.id) {
        this.title = this.editTitle;
        this.service.getOne(params.id).subscribe(item => {
          this.createForm(item);
        });
      }
      else {
        this.title = this.newTitle;
        this.createForm(new this.factory());
      }
   });
  }

  abstract formGroupConfig(item: Model): { [key: string]: any; };

  createForm(item: Model) {
    this.item = item;
    this.form = this.fb.group(this.formGroupConfig(this.item));
  }

  abstract navigateToList();

  save() {
    this.updateFromForm(this.form.value);
    if (!this.item.id) {
      this.service.save(this.item);
    }
    else {
      this.service.update(this.item);
    }
    this.navigateToList();
  }

  abstract updateFromForm(formValue: any);
}
