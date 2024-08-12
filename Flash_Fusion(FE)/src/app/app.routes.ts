import { Routes } from '@angular/router';
import path from 'path';
import { LoginComponent } from '../Components/login/login.component';
import { ForgotpasswordComponent } from '../Components/forgotpassword/forgotpassword.component';

export const routes: Routes = [
   { path: '', redirectTo: '/login', pathMatch: 'full' },
   {path :'login', component:LoginComponent},
   {path:'forgotpassword', component:ForgotpasswordComponent,}

];

