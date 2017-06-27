import { Usuario } from './../models/usuario';
import { Post } from './../models/post';
import { PostService } from './../services/post.service';
import { AuthenticationService } from './../services/authentication.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  post: Post;
  user: Usuario;
  tam = 14;
  
  constructor
  (
    private _router: Router,
    private _authenticationService: AuthenticationService,
    private _postService: PostService,
  ) 
  { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem("currentUser"));
    this.iniciarPost();
  }

  iniciarPost() {
    this.post = new Post();
    this.post.usuario = this.user;
    this.post.idUsuario = this.user.id;
  }

  mudaFonte(tipo)
  {
    if (tipo=="mais")
    {
      if(this.tam<24) this.tam+=1;	
    }else
    {
      if(this.tam>14) this.tam-=1;
    }
    document.querySelector('body').style.fontSize = this.tam+'px';
  }

  resetarFonte()
  {
    document.querySelector('body').style.fontSize = '14px';
  }

  sair(){
    this._authenticationService.logout();
    this._router.navigate(['/login']);
  }

  salvarPost(){
    this._postService.salvarPost(this.post)
      .subscribe(
        (data) => { console.log("Ok", data); this.iniciarPost()},
        (error) => { console.error("Error", Error)}  
      )
  }

}
