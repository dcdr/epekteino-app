import { Component } from '@angular/core';

import { AuthService, TermService } from './services';
import { User } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Epekteino - Class Registration';
  private user: User = null;
  
  constructor(auth: AuthService, termService: TermService) {
    this.user = auth.getUser();
  }

  userIsRegistrar() {
    return this.user && this.user.hasRole('registrar');
  }

  userIsInstructor() {
    return this.user && this.user.hasRole('instructor');
  }

  userIsStudent() {
    return this.user && this.user.hasRole('student');
  }

  userIsAnonymous() {
    return !this.user;
  }
}
