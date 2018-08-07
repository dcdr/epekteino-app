export class Requirement {
  constructor(r: Requirement = null) {
    if (!!r) {
      this.id = r.id;
      this.name = r.name;
      this.description = r.description;
    }
  }
  id: string;
  name: string ;
  description: string;
};