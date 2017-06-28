import { PostService } from './../services/post.service';
import { Post } from './../models/post';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-postagem',
  templateUrl: './postagem.component.html',
  styleUrls: ['./postagem.component.scss']
})
export class PostagemComponent implements OnInit {

  public postagens: Array<Post>;

  constructor
  (
    private _postService: PostService
  ) 
  { 
    this.postagens = new Array<Post>();
  }

  ngOnInit() {
    this._postService.obtemPosts()
      .subscribe(
        (data) => { this.postagens = data;  console.log("posts", data); }, 
        (error) => { console.log(error) }
      );
  }

}
