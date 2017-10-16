import { Component, OnInit, Input } from '@angular/core';

import { AuthService, TermService } from '../services';
import { ChecklistItem, Term, User } from '../models';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.scss']
})
export class ChecklistComponent implements OnInit {
  term: Term;
  checklist: Array<ChecklistItem>;

  constructor(private authService: AuthService, private termService: TermService) {
  }

  ngOnInit() {
    this.termService.current.subscribe(term => {
      this.term = term;
      this.checklist = this.getChecklist();
    });
    this.checklist = this.getChecklist();
  }

  isTaskComplete(task: string): boolean {
    return this.term.isChecklistComplete(task);
  }

  private getChecklist(): Array<ChecklistItem> {
    let user = this.authService.getUser();
    let checklist = new Array<ChecklistItem>();
    if (user.hasRole('registrar')) {
      checklist.push(new ChecklistItem('Terms', 'terms'));
      if (!!this.term) {
        checklist.push(new ChecklistItem('Classrooms', 'classrooms'));
        checklist.push(new ChecklistItem('Requirements', 'requirements'));
        checklist.push(new ChecklistItem('Courses', 'courses'));
        checklist.push(new ChecklistItem('Instructors', 'instructors'));
        checklist.push(new ChecklistItem('Students', 'students'));
        checklist.push(new ChecklistItem('Classes', 'classes'));
      }
    }
    return checklist;
  }
}
