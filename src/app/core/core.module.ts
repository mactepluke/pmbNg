import {LOCALE_ID, NgModule} from '@angular/core';
import {httpInterceptorProviders} from './interceptors';
import {HeaderComponent} from './components/header/header.component';
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {ContactPageComponent} from "./pages/contact-page/contact-page.component";
import {NotfoundPageComponent} from "./pages/notfound-page/notfound-page.component";
import * as fr from "@angular/common/locales/fr";
import {ConfirmationService, MessageService} from "primeng/api";
import {SharedModule} from "../shared/shared.module";
import {registerLocaleData} from "@angular/common";
import {UserService} from "./services/user.service";
import {AuthService} from "./services/auth.service";


@NgModule({
  declarations: [
    HeaderComponent,
    HomePageComponent,
    ContactPageComponent,
    NotfoundPageComponent
  ],
  imports: [
    SharedModule
  ],
  exports:  [
    HeaderComponent
  ],
  providers: [
    httpInterceptorProviders,
    {provide: LOCALE_ID, useValue: 'fr-FR'},
    ConfirmationService,
    MessageService,
    UserService,
    AuthService
  ]
})
export class CoreModule {
  constructor() {
    registerLocaleData(fr.default);
  }
}
