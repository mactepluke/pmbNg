import {NgModule} from '@angular/core';
import {AuthRoutingModule} from "./auth-routing.module";
import {LoginPageComponent} from "./pages/login-page/login-page.component";
import {CreateAccountPageComponent} from "./pages/create-account-page/create-account-page.component";
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    LoginPageComponent,
    CreateAccountPageComponent
  ],
  imports: [
    AuthRoutingModule,
    SharedModule
  ]
})
export class AuthModule {
}
