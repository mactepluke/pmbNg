import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {registerLocaleData} from "@angular/common";
import * as fr from '@angular/common/locales/fr';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {TransferPageComponent} from './pages/transfer-page/transfer-page.component';
import {ProfilePageComponent} from './pages/profile-page/profile-page.component';
import {ContactPageComponent} from './pages/contact-page/contact-page.component';
import {HeaderComponent} from './header/header.component';
import {AppRoutingModule} from "./app-routing.module";
import {NotfoundPageComponent} from './pages/notfound-page/notfound-page.component';
import {AccountPageComponent} from './pages/account-page/account-page.component';
import {ButtonModule} from "primeng/button";
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';
import {CheckboxModule} from "primeng/checkbox";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SendMoneyComponent} from './pages/transfer-page/send-money/send-money.component';
import {MyTransactionsComponent} from './pages/transfer-page/my-transactions/my-transactions.component';
import {CascadeSelectModule} from "primeng/cascadeselect";
import {DropdownModule} from "primeng/dropdown";
import {InputNumberModule} from "primeng/inputnumber";
import {TableModule} from "primeng/table";
import {AvatarModule} from "primeng/avatar";
import {TagModule} from "primeng/tag";
import {ProfileComponent} from './pages/profile-page/profile/profile.component';
import {SpotAccountsComponent} from './pages/profile-page/spot-accounts/spot-accounts.component';
import {BankAccountsComponent} from './pages/profile-page/bank-accounts/bank-accounts.component';
import {BuddiesComponent} from './pages/profile-page/buddies/buddies.component';
import {LoginComponent} from './pages/account-page/login/login.component';
import {CreateAccountComponent} from './pages/account-page/create-account/create-account.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthorizationHttpInterceptorService} from "./services/authorization-http-interceptor.service";
import { LogoutComponent } from './pages/account-page/logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    TransferPageComponent,
    ProfilePageComponent,
    ContactPageComponent,
    HeaderComponent,
    NotfoundPageComponent,
    AccountPageComponent,
    SendMoneyComponent,
    MyTransactionsComponent,
    ProfileComponent,
    SpotAccountsComponent,
    BankAccountsComponent,
    BuddiesComponent,
    LoginComponent,
    CreateAccountComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule,
    CardModule,
    PasswordModule,
    CheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    CascadeSelectModule,
    DropdownModule,
    InputNumberModule,
    TableModule,
    AvatarModule,
    TagModule,
    HttpClientModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'fr-FR'},
    {provide: HTTP_INTERCEPTORS, useClass: AuthorizationHttpInterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor() {
    registerLocaleData(fr.default);
  }
}
