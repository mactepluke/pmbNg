import {LOCALE_ID, NgModule} from '@angular/core';
import {CommonModule, registerLocaleData} from '@angular/common';
import {httpInterceptorProviders} from './interceptors';
import {HeaderComponent} from './components/header/header.component';
import {RouterModule} from "@angular/router";
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {ContactPageComponent} from "./pages/contact-page/contact-page.component";
import {NotfoundPageComponent} from "./pages/notfound-page/notfound-page.component";
import * as fr from "@angular/common/locales/fr";
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
import {SessionService} from "./services/session.service";
import {UserService} from "./services/user.service";


@NgModule({
  declarations: [
    HeaderComponent,
    HomePageComponent,
    ContactPageComponent,
    NotfoundPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
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
  ],
  exports:  [
    HeaderComponent,
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
