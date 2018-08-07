import { Injectable, Inject } from '@angular/core';
import { InjectionToken } from '@angular/core';

import { User } from '../models/user.model';

export let AUTH_STORE = new InjectionToken('AUTH_STORE');

@Injectable()
export class AuthService {
  private user: User = null;

  constructor(@Inject(AUTH_STORE) private storageKey: string) { }

  authenticate(params): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      if (params.email === 'registrar' && params.password === 'registrar') {
        this.persistUser(new User('registrar', 'ambrose', ['registrar'], ['classroom:*', 'course:*', 'class:*', 'instructor:*', 'student:*', 'requirement:*', 'registration:*', 'term:*' ]));
        resolve(true);
      }
      if (params.email === 'instructor' && params.password === 'instructor') {
        this.persistUser(new User('instructor', 'ambrose', ['instructor'], ['classroom:get', 'course:get', 'class:get', 'instructor:get', 'student:get', 'requirement:get', 'term:get']));
        resolve(true);
      }
      if (params.email === 'student' && params.password === 'student') {
        this.persistUser(new User('student', 'ambrose', ['student'], ['course:get', 'class:get', 'instructor:get', 'requirement:get', 'term:get']));
        resolve(true);
      }
      else {
        resolve(false);
      }
    });
  }

  getUser(): User {
    if (!this.user) {
      if (typeof Storage !== 'undefined') {
        const saved = JSON.parse(localStorage.getItem(this.storageKey));
        if (!!saved) {
          this.user = new User(saved.familyName, saved.givenName, saved.roles, saved.permissions);
        }
      }
    }
    return this.user;
  }

  isAuthenticated(): boolean {
    return !!this.user;
  }

  logout() {
    this.user = null;
    if (typeof Storage !== 'undefined') {
      localStorage.setItem(this.storageKey, null);
    }
  }

  private persistUser(user: User) {
    if (typeof Storage !== 'undefined') {
      localStorage.setItem(this.storageKey, JSON.stringify(user));
    }
    this.user = user;
  }
}
