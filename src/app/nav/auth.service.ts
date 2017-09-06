import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class AuthService {
    private user: any = null;

    constructor(http: Http) {
    }

    currentUser(): any {
        return this.user;
    }

    isAuthenticated(): boolean {
        return this.user != null;
    }
}