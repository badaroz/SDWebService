import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {
public usuario : Usuario;
  constructor(http : Http) {
  http.get('api/UsuarioApi').subscribe(result=>
   this.usuario = result.json(),)   
   }

  ngOnInit() {
  }


  public usuarios = [
    {nome: "Henrique", email: "email@email.email", dataNascimento: new Date()},
    {nome: "Fagner", email: "email@email.email", dataNascimento: new Date()},
    {nome: "Belmiro", email: "email@email.email", dataNascimento: new Date()},
    {nome: "Gladison", email: "email@email.email", dataNascimento: new Date()},
    {nome: "Henrique", email: "email@email.email", dataNascimento: new Date()}
  ];

}

interface Usuario {
  nome: string;
  email:string;
  dataNascimento: Date;
}