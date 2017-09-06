import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FeathersService } from '../feathers/feathers.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private feathers: FeathersService, private router: Router) { }

  ngOnInit() { }

  login(email, password) {
    if (!email || !password) {
    //  this.messages.push('Incomplete credentials!');
      return;
    }

    // try to authenticate with feathers
    this.feathers.authenticate({
      strategy: 'local',
      email,
      password
    })
    // navigate to base URL on success
    .then(() => {
      debugger;
      this.router.navigate(['/']);
    })
    .catch(err => {
      // this.messages.unshift('Wrong credentials!');
      debugger;
    });
  }
}
