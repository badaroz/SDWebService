import { Usuario } from './../models/usuario';
import { UsuarioService } from './../services/usuario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  public usuarios: Array<Usuario>;

  constructor
  (
    private _usuarioService:UsuarioService
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

}