import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
    constructor(private http: Http) { }

    login(user: any) : Observable<any> {
        return this.http.get('http://localhost:51256/api/login/' + user.email + "/" + user.senha)
            .map((response: Response) => response.json());
    }

    logout() {
        localStorage.removeItem('currentUser');
    }
}