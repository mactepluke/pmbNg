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
import {ButtonModule} from "primeng/button";
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';
import {CheckboxModule} from "primeng/checkbox";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CascadeSelectModule} from "primeng/cascadeselect";
import {DropdownModule} from "primeng/dropdown";
import {InputNumberModule} from "primeng/inputnumber";
import {TableModule} from "primeng/table";
import {ConfirmationService} from 'primeng/api';
import {MessageService } from 'primeng/api';
import {AvatarModule} from "primeng/avatar";
import {TagModule} from "primeng/tag";
import {ProfileComponent} from './pages/profile-page/profile/profile.component';
import {SpotAccountsComponent} from './pages/profile-page/spot-accounts/spot-accounts.component';
import {BankAccountsComponent} from './pages/profile-page/bank-accounts/bank-accounts.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthorizationHttpInterceptorService} from "./services/authorization-http-interceptor.service";
import {LoginPageComponent} from './pages/login-page/login-page.component';
import {CreateAccountPageComponent} from "./pages/create-account-page/create-account-page.component";
import {RecipientsComponent} from "./pages/profile-page/recipients/recipients.component";
import {ToastModule} from "primeng/toast";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {RippleModule} from "primeng/ripple";
import {DialogModule} from "primeng/dialog";
import { AddbuddyDialogComponent } from './dialogs/addbuddy-dialog/addbuddy-dialog.component';
import { ProcessedPipe } from './pages/transfer-page/processed.pipe';
import { MePipe } from './pages/transfer-page/me.pipe';
import { AmountPipe } from './pages/transfer-page/amount.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    TransferPageComponent,
    ProfilePageComponent,
    ContactPageComponent,
    HeaderComponent,
    NotfoundPageComponent,
    ProfileComponent,
    SpotAccountsComponent,
    BankAccountsComponent,
    RecipientsComponent,
    LoginPageComponent,
    CreateAccountPageComponent,
    RecipientsComponent,
    AddbuddyDialogComponent,
    ProcessedPipe,
    MePipe,
    AmountPipe
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
        HttpClientModule,
        ToastModule,
        ConfirmDialogModule,
        RippleModule,
        DialogModule
    ],
  providers: [
    ConfirmationService,
    MessageService,
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
