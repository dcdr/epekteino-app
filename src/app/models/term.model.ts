import * as moment from 'moment';

export class Term {
  id: string; // guid
  name: string;
  startDate: moment.Moment;
  endDate: moment.Moment;
  registrationOpens: moment.Moment;
  registrationCloses: moment.Moment;
  registrationIsOpen: boolean;

  constructor() {
    this.registrationIsOpen = false;
  }

  openRegistration() {
    this.registrationIsOpen = true;
  }

  closeRegistration() {
    this.registrationIsOpen = false;
  }

  clone(): Term {
    let copy = new Term();
    copy.id = this.id;
    copy.name = this.name;
    copy.startDate = this.startDate;
    copy.endDate = this.endDate;
    copy.registrationOpens = this.registrationOpens;
    copy.registrationCloses = this.registrationCloses;
    copy.registrationIsOpen = this.registrationIsOpen;
    return copy;
  }
}
