export class Classroom {
  id: string;
  name: string;
  location: string;
  nickname: string;
  capacity: number;

  constructor(c: Classroom = null) {
    if (!!c) {
      this.id = c.id;
      this.name = c.name;
      this.location = c.location;
      this.nickname = c.nickname;
      this.capacity = c.capacity;
    }
  }
}