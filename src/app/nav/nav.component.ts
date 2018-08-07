import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { AuthService, TermService } from '../services';
import { Term } from '../models';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }
  
  ngOnInit() {
  }
  
  isAuthenticated(): boolean {
    return this.auth.isAuthenticated();
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/'])
  }
}
