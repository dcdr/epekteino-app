import * as moment from 'moment';

export class Term {
  id: string; // guid
  name: string;
  startDate: moment.Moment;
  endDate: moment.Moment;
  registrationOpens: moment.Moment;
  registrationCloses: moment.Moment;
  registrationIsOpen: boolean;
  checklist: string[]

  constructor(t: Term = null) {
    if (!!t) {
      this.id = t.id;
      this.name = t.name;
      this.startDate = moment.isMoment(t.startDate) ? t.startDate : moment(t.startDate);
      this.endDate = moment.isMoment(t.endDate) ? t.endDate : moment(t.endDate);
      this.registrationOpens = moment.isMoment(t.registrationOpens) ? t.registrationOpens : moment(t.registrationOpens);
      this.registrationCloses = moment.isMoment(t.registrationCloses) ? t.registrationCloses : moment(t.registrationCloses);
      this.registrationIsOpen = t.registrationIsOpen;
    }
    else {
      this.registrationIsOpen = false;
    }
}

  registrationCanOpen() {
    return !this.registrationIsOpen && moment().isBefore(this.registrationCloses);
  }

  openRegistration() {
    this.registrationIsOpen = true;
  }

  closeRegistration() {
    this.registrationIsOpen = false;
  }

  completeChecklist(checklist: string) {
    if (!this.checklist) {
      this.checklist = [];
    }
    if (-1 === this.checklist.indexOf(checklist)) {
      this.checklist.push(checklist);
    }
  }

  isChecklistComplete(checklist: string) {
    return this.checklist && -1 !== this.checklist.indexOf(checklist);
  }
}
