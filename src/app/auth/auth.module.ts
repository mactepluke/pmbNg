import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthRoutingModule} from "./auth-routing.module";
import {LoginPageComponent} from "./pages/login-page/login-page.component";
import {CreateAccountPageComponent} from "./pages/create-account-page/create-account-page.component";
import {ButtonModule} from "primeng/button";
import {CardModule} from "primeng/card";
import {PasswordModule} from "primeng/password";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {ToastModule} from "primeng/toast";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {RippleModule} from "primeng/ripple";
import {DialogModule} from "primeng/dialog";


@NgModule({
  declarations: [
    LoginPageComponent,
    CreateAccountPageComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ButtonModule,
    CardModule,
    PasswordModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    ToastModule,
    ConfirmDialogModule,
    RippleModule,
    DialogModule
  ]
})
export class AuthModule {
}
