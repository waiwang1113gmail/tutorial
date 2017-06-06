import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService }            from './auth-guard.service';
import { AuthService }          from './auth.service';
import { LoginComponent }       from './login.component';

const loginRoute: Routes = [
    { path: 'login', component: LoginComponent }
]
@NgModule({
    imports: [ RouterModule.forChild(loginRoute) ]
})
export class LoginRoutingModule{}
