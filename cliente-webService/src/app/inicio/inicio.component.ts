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

  title = 'app works!';
  tam = 14;
  
  constructor
  (
    private _router: Router,
    private _authenticationService: AuthenticationService,
    private _postService: PostService,
  ) 
  { }

  ngOnInit() { }

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
    
  }

}
