import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations : [
        SignupComponent,
        SigninComponent
    ], imports : [
        AuthRoutingModule,
        FormsModule,
        CommonModule
    ]
})
export class AuthModule {

}