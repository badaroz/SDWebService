import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
    constructor(private http: Http) { }

    login(user: any) {
        localStorage.setItem('currentUser', JSON.stringify(user));
    }

    logout() {
        localStorage.removeItem('currentUser');
    }
}