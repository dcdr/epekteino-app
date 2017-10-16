import { Component } from '@angular/core';

import { AuthService } from './services/auth.service';
import { User } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Epekteino - Class Registration';
  private user: User = null;
  
  constructor(auth: AuthService) {
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
