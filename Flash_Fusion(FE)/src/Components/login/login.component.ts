import { Component } from '@angular/core';
import { LoginService } from './services/login.service';
import { Login } from '../../Models/Login';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  userresult!: Login;

  constructor(private _loginservice : LoginService ){
  }

  ngOnInit(){
    this._loginservice.login(this.userresult)
  }
  
}
