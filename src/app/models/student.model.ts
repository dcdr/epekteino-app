import * as moment from 'moment';

export class Student {
  static classes = [ '12th', '11th', '10th', '9th', '8th', '7th' ];

  constructor(r: Student = null) {
    if (!!r) {
      this.id = r.id;
      this.givenName = r.givenName;
      this.familyName = r.familyName;
      this.birthdate = r.birthdate;
      this.transcript = r.transcript;
      this.credits = r.credits;
      this.class = r.class;
    }
    else {
      this.birthdate = moment().subtract(8, 'years');
    }
  }
  id: string;
  givenName: string;
  familyName: string;
  birthdate: moment.Moment;
  transcript: Array<string>;    // ids of completed courses
  credits: number;
  class: string;
};
