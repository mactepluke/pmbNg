import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from "./core/pages/home-page/home-page.component";
import {TransferPageComponent} from "./pmb/pmb/pages/transfer-page/transfer-page.component";
import {ProfilePageComponent} from "./pmb/pmb/pages/profile-page/profile-page.component";
import {ContactPageComponent} from "./core/pages/contact-page/contact-page.component";
import {NotfoundPageComponent} from "./core/pages/notfound-page/notfound-page.component";
import {LoginPageComponent} from "./core/pages/login-page/login-page.component";
import {CreateAccountPageComponent} from "./core/pages/create-account-page/create-account-page.component";
import {OperationsHistoryPageComponent} from "./pmb/pmb/pages/operations-history-page/operations-history-page.component";


const routes: Routes = [
  {path: '', redirectTo: '/paymybuddy', pathMatch: 'full'},
  {path: 'paymybuddy', component: HomePageComponent},
  {path: 'paymybuddy/transfer', component: TransferPageComponent},
  {path: 'paymybuddy/profile', component: ProfilePageComponent},
  {path: 'paymybuddy/contact', component: ContactPageComponent},
  {path: 'paymybuddy/login', component: LoginPageComponent},
  {path: 'paymybuddy/create-account', component: CreateAccountPageComponent},
  {path: 'paymybuddy/operations-history', component: OperationsHistoryPageComponent},
  {path: '**', component: NotfoundPageComponent},
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
