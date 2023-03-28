import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from "./core/pages/home-page/home-page.component";
import {ContactPageComponent} from "./core/pages/contact-page/contact-page.component";
import {NotfoundPageComponent} from "./core/pages/notfound-page/notfound-page.component";
import {LoginPageComponent} from "./core/pages/login-page/login-page.component";
import {CreateAccountPageComponent} from "./core/pages/create-account-page/create-account-page.component";


const routes: Routes = [
  {path: '', redirectTo: '/paymybuddy', pathMatch: 'full'},
  {path: 'paymybuddy', component: HomePageComponent},
  {path: 'paymybuddy/contact', component: ContactPageComponent},
  {path: 'paymybuddy/login', component: LoginPageComponent},
  {path: 'paymybuddy/create-account', component: CreateAccountPageComponent},
  {path: 'paymybuddy/pmb', loadChildren: () => import('./pmb/pmb.module').then(m => m.PmbModule)},
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
