import { PostagemComponent } from './../postagem/postagem.component';
import { InicioComponent } from './inicio.component';
import { EditarUsuarioComponent } from './../editar-usuario/editar-usuario.component';
import { IncluirUsuarioComponent } from './../incluir-usuario/incluir-usuario.component';
import { UsuariosComponent } from './../usuarios/usuarios.component';
import { NgModule, Component } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: InicioComponent,
    children : [
      {path:'postagens', component: PostagemComponent},
      {path:'usuarios', component: UsuariosComponent},
      {path:'usuarios/incluir', component: IncluirUsuarioComponent},
      {path:'usuarios/:id/editar', component: EditarUsuarioComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InicioRoutingModule { }
