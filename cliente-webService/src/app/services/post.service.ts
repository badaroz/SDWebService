import { Post } from './../models/post';
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class PostService {
    constructor(private http: Http) { }

    obtemPosts(): Observable<Array<Post>>{
        return this.http.get('http://localhost:51256/api/PostApi')
            .map((response: Response) => response.json());
    }

    salvarPost(post: Post): Observable<any>{
        var headers = new Headers();
                headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:51256/api/PostApi', JSON.stringify(post),{ headers: headers })
            .map((response: Response) => response.json());
    }
}