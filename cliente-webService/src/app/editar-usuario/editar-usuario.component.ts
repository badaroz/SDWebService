import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.scss']
})
export class EditarUsuarioComponent implements OnInit {

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

  public edit(){
    this.router.navigate(['usuarios']);
  }

}
