import { LoginComponent } from './login/login.component';
import { NgModule, Component } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {
    path: '',
    loadChildren: 'app/inicio/inicio.module#InicioModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
