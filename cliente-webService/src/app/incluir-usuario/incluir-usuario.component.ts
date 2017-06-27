import { UsuarioService } from './../services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: 'app-incluir-usuario',
  templateUrl: './incluir-usuario.component.html',
  styleUrls: ['./incluir-usuario.component.scss']
})
export class IncluirUsuarioComponent implements OnInit {

  public formGroupUsuario: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private _usuarioService: UsuarioService
  ) { 

    this.formGroupUsuario = this.formBuilder.group(
      {
        nome:           ['', Validators.required],
        email:          ['', Validators.required],
        senha:          ['', Validators.required],
        dataNascimento: ['', Validators.required]
      }
    );
  }

  ngOnInit() {
  }

  public add(){
    this._usuarioService.salvarUsuario(this.formGroupUsuario.value)
      .subscribe((data) => {
        console.log("Ok", data);
        this._usuarioService.obtemUltimoUsuarioCadastrado()
          .subscribe((data) => {
            console.log("Ok", data);
            localStorage.setItem("currentUser", JSON.stringify(data));
            this.router.navigate(['usuarios']);
          }, (error) => {
            console.log("Error", error);
          });
      }, (error) => {
        console.log("Error", error);
      });
  }

}
