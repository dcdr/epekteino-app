

export class ChecklistItem {
  name: string;
  complete: boolean;
  route: string;

  constructor(name: string, route: string) {
    this.name = name;
    this.route = route;
    this.complete = false;
  }

  markComplete() {
    this.complete = true;
  }
}