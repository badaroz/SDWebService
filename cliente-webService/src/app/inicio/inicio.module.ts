import { PostagemComponent } from './../postagem/postagem.component';
import { ModalModule } from './../utils/modal/modal.module';
import { HttpModule } from '@angular/http';

import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { UsuariosComponent } from './../usuarios/usuarios.component';
import { EditarUsuarioComponent } from './../editar-usuario/editar-usuario.component';
import { IncluirUsuarioComponent } from './../incluir-usuario/incluir-usuario.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioRoutingModule } from './inicio-routing.module';

import { InicioComponent } from './inicio.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, 
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    ModalModule,
    InicioRoutingModule
  ],
  declarations: [
    InicioComponent,
    IncluirUsuarioComponent,
    EditarUsuarioComponent,
    UsuariosComponent,
    PostagemComponent
  ]
})
export class InicioModule { }
