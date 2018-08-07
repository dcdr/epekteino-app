import { Component, OnInit } from '@angular/core';
import { Ng4FilesStatus, Ng4FilesSelected } from 'angular4-files-upload';
import { BaseService, HasId, FileService } from './services';

export class BaseListComponent<Model extends HasId, Service extends BaseService<Model>> implements OnInit {
  list: Array<Model>;

  constructor(private modelService: Service, private fileService: FileService) { }

  ngOnInit() {
    this.loadAll();
  }

  onFilesSelect(selection) {
    if (selection.status === Ng4FilesStatus.STATUS_SUCCESS) {
      this.fileService.upload(selection.files).subscribe(done => {
        this.loadAll();
      });
    }
  }

  onDownload() {
    this.fileService.download();
  }

  onDelete(r: Model) {
    this.modelService.delete(r);
    this.loadAll();
  }

  loadAll() {
    this.modelService.getAll().toArray().subscribe(all => { 
      this.list = all; 
    });
  }
}
