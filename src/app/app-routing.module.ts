import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./home-page/home-page.component";
import {TransferPageComponent} from "./transfer-page/transfer-page.component";
import {ProfilePageComponent} from "./profile-page/profile-page.component";
import {ContactPageComponent} from "./contact-page/contact-page.component";
import {NotfoundPageComponent} from "./notfound-page/notfound-page.component";
import {LoginPageComponent} from "./login-page/login-page.component";

const routes: Routes = [
  {path: '', redirectTo: '/paymybuddy', pathMatch: 'full'},
  {path: 'paymybuddy', component: HomePageComponent},
  {path: 'paymybuddy/transfer', component: TransferPageComponent},
  {path: 'paymybuddy/profile', component: ProfilePageComponent},
  {path: 'paymybuddy/contact', component: ContactPageComponent},
  {path: 'paymybuddy/login', component: LoginPageComponent},
  { path: '**', component: NotfoundPageComponent },
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
export class AppRoutingModule { }
