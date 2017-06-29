import { Usuario } from './../models/usuario';
import { UsuarioService } from './../services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  public usuarios: Array<Usuario>;

  constructor
  (
    private _usuarioService: UsuarioService,
    private _router: Router
  ) 
  { 
    this.usuarios = new Array<Usuario>();
  }

  ngOnInit() {
    this._usuarioService.obtemUsuarios()
      .subscribe(
        (data) => { this.usuarios = data }, 
        (error) => { console.log(error) });
  }

  detalheUsuario(id: number){
    this._router.navigateByUrl('/postagens/'+id);
  }

}