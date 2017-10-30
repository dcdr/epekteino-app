import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import * as Excel from 'exceljs/dist/es5/exceljs.browser';
import { saveAs } from 'file-saver';

import { ClassroomService } from './classroom.service';
import { Classroom, Term} from '../models';

function s2ab(s: string): ArrayBuffer {
	const buf: ArrayBuffer = new ArrayBuffer(s.length);
	const view: Uint8Array = new Uint8Array(buf);
	for (let i = 0; i !== s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
	return buf;
}

@Injectable()
export class FileService {
  constructor(@Inject(ClassroomService) private classroomService: ClassroomService) {
  }

  upload(file: File): Observable<boolean> {
    return Observable.create(observer => {
      // let wb = new Excel.Workbook();
      // wb.xlsx.readFile(file.name)
      // .then(function() {
      //   let classrooms = wb.getWorksheet('Classrooms');
      //   classrooms.columns = [
      //     { header: 'Id', key: 'id', width: 10 },
      //     { header: 'Name', key: 'name', width: 10 },
      //     { header: 'Location', key: 'location', width: 32 },
      //     { header: 'Nickname', key: 'nickname', width: 16 },
      //     { header: 'Capacity', key: 'capacity', width: 8 }
      //   ];
      //   classrooms.eachRow(function(row, rowNumber){
      //     if (rowNumber > 1) {
      //       console.log(row);
      //     }
      //   });
      //   observer.next(true);
      //   observer.complete();
      // });

      var myReader = new FileReader();
  
      myReader.onloadend = function(e){
        let wb = new Excel.Workbook();
        wb.xlsx.load(myReader.result)
        .then(function(wb2) {
          let classrooms = wb2.getWorksheet('Classrooms');
          classrooms.columns = [
            { header: 'Id', key: 'id', width: 10 },
            { header: 'Name', key: 'name', width: 10 },
            { header: 'Location', key: 'location', width: 32 },
            { header: 'Nickname', key: 'nickname', width: 16 },
            { header: 'Capacity', key: 'capacity', width: 8 }
          ];
          classrooms.eachRow(function(row, rowNumber){
            if (rowNumber > 1) {
              console.log(row);
            }
          });
          observer.next(true);
          observer.complete();
        });    
      }
  
      myReader.readAsBinaryString(file);
    });
  }

  download() {
    let wb = new Excel.Workbook();
    let worksheetsLoaded = 0;
    
    // Create the Classrooms worksheet
    let classrooms = wb.addWorksheet('Classrooms');
    classrooms.columns = [
      { header: 'Id', key: 'id', width: 10 },
      { header: 'Name', key: 'name', width: 10 },
      { header: 'Location', key: 'location', width: 32 },
      { header: 'Nickname', key: 'nickname', width: 16 },
      { header: 'Capacity', key: 'capacity', width: 8 }
    ];
    let idCol = classrooms.getColumn('id');
    idCol.hidden = true;

    this.classroomService.getAll().subscribe({ next: classroom => {
      classrooms.addRow(classroom);
    }, complete: () => { worksheetsLoaded++; }});

    while (worksheetsLoaded < 1) {
      console.log('waiting');
      setTimeout(function(){}, 1000);
    }
    console.log('done');

    wb.xlsx.writeBuffer()
      .then(function(buffer) {
        saveAs(new Blob([buffer]), 'Registration.xlsx');
      });
  }
}
