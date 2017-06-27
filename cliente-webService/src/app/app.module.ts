import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';

import { AuthenticationService } from './services/index';
import { AuthGuard } from './guards/index';
import { InicioModule } from './inicio/inicio.module';
import { ModalModule } from './utils/modal/modal.module';
import { AppRoutingModule } from './app-routing.module';

import { PostService } from './services/post.service';
import { UsuarioService } from './services/usuario.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    ModalModule,
    InicioModule
  ],
  providers: [
    FormBuilder, 
    AuthenticationService,
    AuthGuard,
    UsuarioService,
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
