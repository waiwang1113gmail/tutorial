import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AuthGuardService } from './auth-guard.service';
import { AuthService } from './auth.service';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';

export { AuthService } from './auth.service';
export { AuthGuardService } from './auth-guard.service';

@NgModule({
    declarations: [ LoginComponent ],
    exports: [ LoginComponent ],
    providers: [ AuthGuardService, AuthService ],
    imports: [ LoginRoutingModule, CommonModule ]

})
export class SharedModule{

}