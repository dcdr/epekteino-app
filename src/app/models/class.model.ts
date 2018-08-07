export class Class {
  static periods = [ '1st', '2nd', '3rd', '4th', 'E-hour', '5th', '6th', '7th' ];

  id: string;         // guid
  period: string;
  course: string;     // id
  term: string;       // id
  instructor: string; // id
  classroom: string;  // id
  capacity: number;

  constructor(c: Class = null) {
    if (!!c) {
      this.id = c.id;
      this.period = c.period;
      this.course = c.course;
      this.term = c.term;
      this.instructor = c.instructor;
      this.classroom = c.classroom;
      this.capacity = c.capacity;
    }
  }
}
