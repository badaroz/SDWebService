import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthenticationService } from './../services/authentication.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public formLogin: FormGroup;

  constructor
  (
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _authenticationService: AuthenticationService
  ) 
  { 
    this.formLogin = this._formBuilder.group(
      {
        email: ['', Validators.required],
        senha: ['', Validators.required]
      }
    );
  }

  ngOnInit() {
  }

  login(){
    this._authenticationService.login(this.formLogin.value);
    this._router.navigate(['/']);
  }

}
