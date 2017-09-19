import { Component } from '@angular/core';
import { FeathersService } from '../../feathers/feathers.service';

declare var $: any;

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {

  constructor(private feathers: FeathersService) { }

  isAuthenticated(): boolean {
    return this.feathers.isAuthenticated();
  }

  logout() {
    this.feathers.logout();
  }
}
