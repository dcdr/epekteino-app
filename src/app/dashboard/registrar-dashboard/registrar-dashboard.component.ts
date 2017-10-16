import { Component, OnInit } from '@angular/core';
import { TermService } from '../../services/term.service';
import { Term } from '../../models/term.model';

@Component({
  selector: 'app-registrar-dashboard',
  templateUrl: './registrar-dashboard.component.html',
  styleUrls: ['./registrar-dashboard.component.scss']
})
export class RegistrarDashboardComponent implements OnInit {
  terms: Array<Term>;

  constructor(private termService: TermService) { }

  ngOnInit() {
    this.termService.getTerms().subscribe((response) => {
      this.terms = response;
    });
  }

}
