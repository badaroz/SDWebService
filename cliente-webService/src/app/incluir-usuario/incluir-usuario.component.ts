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
    private router: Router
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
    this.router.navigate(['usuarios']);
  }

}
