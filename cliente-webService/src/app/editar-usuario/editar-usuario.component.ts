import { UsuarioService } from './../services/usuario.service';
import { Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.scss']
})
export class EditarUsuarioComponent implements OnInit {

  public formGroupUsuario: FormGroup;
  private _idUsuario: number;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private _route: ActivatedRoute,
    private _usuarioService: UsuarioService,
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
     this._route.params.subscribe( params => {
        this._idUsuario = params['id'];
        
        if (this._idUsuario) {
          this._usuarioService.obtemUsuario(this._idUsuario)
            .subscribe(
              (data) => {
                this.formGroupUsuario = this.formBuilder.group(
                  {
                    Id:             [data.Id],
                    nome:           [data.Nome, Validators.required],
                    email:          [data.Email, Validators.required],
                    senha:          [data.Senha, Validators.required],
                    dataNascimento: [data.DataNascimento, Validators.required]
                  }
                );
               }, 
              (error) => { console.log(error) }
            );
        }
    });
  }

  public edit(){
    this.router.navigate(['usuarios']);
    this._usuarioService.atualizarUsuario(this.formGroupUsuario.value)
      .subscribe((data) => {
        console.log("Ok", data);
        localStorage.setItem("currentUser", JSON.stringify(this.formGroupUsuario.value));
        this.router.navigate(['usuarios']);
      }, (error) => {
        console.log("Error", error);
      });
  }

}
