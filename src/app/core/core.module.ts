import {LOCALE_ID, NgModule} from '@angular/core';
import {CommonModule, registerLocaleData} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {httpInterceptorProviders} from './interceptors';
import {HeaderComponent} from './components/header/header.component';
import {RouterModule} from "@angular/router";
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {ContactPageComponent} from "./pages/contact-page/contact-page.component";
import {NotfoundPageComponent} from "./pages/notfound-page/notfound-page.component";
import {LoginPageComponent} from "./pages/login-page/login-page.component";
import {CreateAccountPageComponent} from "./pages/create-account-page/create-account-page.component";
import * as fr from "@angular/common/locales/fr";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AppRoutingModule} from "../app-routing.module";
import {ButtonModule} from "primeng/button";
import {CardModule} from "primeng/card";
import {PasswordModule} from "primeng/password";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {ToastModule} from "primeng/toast";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {RippleModule} from "primeng/ripple";
import {DialogModule} from "primeng/dialog";
import {ConfirmationService, MessageService} from "primeng/api";
import {PmbModule} from "../pmb/pmb.module";
import {SessionService} from "./services/session.service";
import {UserService} from "./services/user.service";


@NgModule({
  declarations: [
    HeaderComponent,
    HomePageComponent,
    ContactPageComponent,
    NotfoundPageComponent,
    LoginPageComponent,
    CreateAccountPageComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule,
    CardModule,
    PasswordModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    ToastModule,
    ConfirmDialogModule,
    RippleModule,
    DialogModule,
    PmbModule
  ],
  exports:  [
    HeaderComponent,
    RouterModule,
    ToastModule
  ],
  providers: [
    httpInterceptorProviders,
    {provide: LOCALE_ID, useValue: 'fr-FR'},
    ConfirmationService,
    MessageService,
    SessionService,
    UserService
  ]
})
export class CoreModule {
  constructor() {
    registerLocaleData(fr.default);
  }
}
