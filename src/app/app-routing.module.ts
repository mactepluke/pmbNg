import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {TransferPageComponent} from "./pages/transfer-page/transfer-page.component";
import {ProfilePageComponent} from "./pages/profile-page/profile-page.component";
import {ContactPageComponent} from "./pages/contact-page/contact-page.component";
import {NotfoundPageComponent} from "./pages/notfound-page/notfound-page.component";
import {LoginPageComponent} from "./pages/login-page/login-page.component";
import {CreateAccountPageComponent} from "./pages/create-account-page/create-account-page.component";
import {OperationsHistoryPageComponent} from "./pages/operations-history-page/operations-history-page.component";


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
