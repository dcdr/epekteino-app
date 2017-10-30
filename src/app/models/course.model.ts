export class Course {
  static subjects = [ 'Art', 'Latin', 'French', 'Greek', 'English', 'Composition', 'Math', 'Science', 'Retoric', 'History' ];
  constructor(r: Course = null) {
    if (!!r) {
      this.id = r.id;
      this.name = r.name;
      this.subject = r.subject;
      this.description = r.description;
      this.credits = r.credits;
      this.prerequisites = r.prerequisites;
    }
  }
  id: string;
  name: string ;
  description: string;
  subject: string;
  credits: number;
  prerequisites: Array<string>;   // course.id
};
