export class Instructor {
  constructor(r: Instructor = null) {
    if (!!r) {
      this.id = r.id;
      this.title = r.title;
      this.givenName = r.givenName;
      this.familyName = r.familyName;
    }
  }
  id: string;
  title: string;
  givenName: string;
  familyName: string;
};
