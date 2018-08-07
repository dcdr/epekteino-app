import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() { }

  login(email, password) {
    if (!email || !password) {
    //  this.messages.push('Incomplete credentials!');
      return;
    }

    // try to authenticate with feathers
    this.auth.authenticate({
      strategy: 'local',
      email,
      password
    })
    // navigate to base URL on success
    .then(() => {
      this.router.navigate(['/']);
    })
    .catch(err => {
      // this.messages.unshift('Wrong credentials!');
    });
  }
}
