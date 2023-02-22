import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {registerLocaleData} from "@angular/common";
import * as fr from '@angular/common/locales/fr';
import {HomePageComponent} from './home-page/home-page.component';
import {TransferPageComponent} from './transfer-page/transfer-page.component';
import {ProfilePageComponent} from './profile-page/profile-page.component';
import {ContactPageComponent} from './contact-page/contact-page.component';
import {HeaderComponent} from './header/header.component';
import {AppRoutingModule} from "./app-routing.module";
import {NotfoundPageComponent} from './notfound-page/notfound-page.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {ButtonModule} from "primeng/button";
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';
import {CheckboxModule} from "primeng/checkbox";
import {FormsModule} from "@angular/forms";
import { SendMoneyComponent } from './transfer-page/send-money/send-money.component';
import { MyTransactionsComponent } from './transfer-page/my-transactions/my-transactions.component';
import {CascadeSelectModule} from "primeng/cascadeselect";
import {DropdownModule} from "primeng/dropdown";
import {InputNumberModule} from "primeng/inputnumber";
import {TableModule} from "primeng/table";
import {AvatarModule} from "primeng/avatar";
import {TagModule} from "primeng/tag";

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    TransferPageComponent,
    ProfilePageComponent,
    ContactPageComponent,
    HeaderComponent,
    NotfoundPageComponent,
    LoginPageComponent,
    SendMoneyComponent,
    MyTransactionsComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ButtonModule,
        CardModule,
        PasswordModule,
        CheckboxModule,
        FormsModule,
        InputTextModule,
        CascadeSelectModule,
        DropdownModule,
        InputNumberModule,
        TableModule,
        AvatarModule,
        TagModule
    ],
  providers: [
    {provide: LOCALE_ID, useValue: 'fr-FR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor() {
    registerLocaleData(fr.default);
  }
}
