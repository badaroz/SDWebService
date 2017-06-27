import { IncluirUsuarioComponent } from './incluir-usuario/incluir-usuario.component';
import { AuthGuard } from './guards/index';
import { LoginComponent } from './login/login.component';
import { NgModule, Component } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: 'app/inicio/inicio.module#InicioModule',
    canActivate: [AuthGuard]
  },
  { path: 'login', component: LoginComponent },
  { path: 'registrar', component: IncluirUsuarioComponent },

  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
