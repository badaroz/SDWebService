import { PostService } from './../services/post.service';
import { Post } from './../models/post';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-postagem',
  templateUrl: './postagem.component.html',
  styleUrls: ['./postagem.component.scss']
})
export class PostagemComponent implements OnInit {

  public postagens: Array<Post>;
  private _idUsuario: number;

  constructor
  (
    private _postService: PostService,
    private _route: ActivatedRoute,
    private _router: Router
  ) 
  { 
    this.postagens = new Array<Post>();
  }

  ngOnInit() {

    this._route.params.subscribe( params => {
        this._idUsuario = params['idUsuario'];
        
        if (this._idUsuario) {
          this._postService.obtemPostsUsuario(this._idUsuario)
            .subscribe(
              (data) => { this.postagens = data;  console.log("posts", data); }, 
              (error) => { console.log(error) }
            );
        } else {
          this._postService.obtemPosts()
            .subscribe(
              (data) => { this.postagens = data;  console.log("posts", data); }, 
              (error) => { console.log(error) }
            );
        }
    });
  }

}
