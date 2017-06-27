import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { Usuario } from "../models/index";

@Injectable()
export class UsuarioService {
    constructor(private http: Http) { }

    obtemUsuarios(): Observable<Array<Usuario>>{
        return this.http.get('http://localhost:51256/api/UsuarioApi')
            .map((response: Response) => response.json());
    }
}