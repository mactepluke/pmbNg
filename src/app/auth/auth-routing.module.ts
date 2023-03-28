import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LoginPageComponent} from "./pages/login-page/login-page.component";
import {LoginGuard} from "../core/guards/login.guard";

const routes: Routes = [
  {path: 'paymybuddy/login', component: LoginPageComponent, canActivate: [LoginGuard]}
]

@NgModule({
    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [
      RouterModule
    ]
  })
export class AuthRoutingModule  {

}
