import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  constructor() { }

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