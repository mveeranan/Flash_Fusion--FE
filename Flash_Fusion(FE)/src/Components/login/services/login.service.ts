import { Injectable } from '@angular/core';
import axios, { Axios } from 'axios';
import { Login } from '../../../Models/Login';
import { from, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  private baseUrl ='http://localhost:5044/api/';
   
  login(data : Login):Observable<any>{
    return from(axios.post(this.baseUrl+'Login',data))
  }
  }
  
