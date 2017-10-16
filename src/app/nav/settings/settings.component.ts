import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { AuthService } from '../../services/auth.service';

declare var $: any;

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {

  constructor(private auth: AuthService, private router: Router) { }

  isAuthenticated(): boolean {
    return this.auth.isAuthenticated();
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/'])
  }
}
