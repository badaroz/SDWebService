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

  postsFiltro: Array<Post>;
  filtro: string;
  
  constructor
  (
    private _router: Router,
    private _authenticationService: AuthenticationService,
    private _postService: PostService,
  ) 
  { }

  ngOnInit() {
    this.postsFiltro = new Array<Post>();
    this.user = JSON.parse(localStorage.getItem("currentUser"));
    this.filtro = "";
    this.iniciarPost();    
  }

  iniciarPost() {
    this.post = new Post();
    this.post.IdUsuario = this.user.Id;
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
        (data) => { 
          console.log("Ok", data); 
          this.iniciarPost();
          this._router.navigate(['/postagens']);
        },
        (error) => { console.error("Error", Error); }  
      )
  }

  editarUsuario(){
    this._router.navigate(['/usuarios/' + this.user.Id + '/editar']);
  }

  filtrar(){
    if(this.filtro.indexOf('#') > -1){
      alert("Não é necessário colocar #");
      return;
    }

    this._postService.obtemPostsFiltro(this.filtro)
      .subscribe(
        (data) => {
          if (data) {
            this.postsFiltro = data;
            if(data.length == 0){
              alert("Nenhum post encontrado!");
            }
          } else {
            alert("Nenhum post encontrado!");
          }
        }, 
        (error) => {
          console.log("Error", error);
        })
  }

}
