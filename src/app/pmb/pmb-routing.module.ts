import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {TransferPageComponent} from "./pages/transfer-page/transfer-page.component";
import {ProfilePageComponent} from "./pages/profile-page/profile-page.component";
import {OperationsHistoryPageComponent} from "./pages/operations-history-page/operations-history-page.component";
import {AuthGuard} from "../core/guards/auth.guard";

const routes: Routes = [
  {path: 'transfer', component: TransferPageComponent, canActivate: [AuthGuard]},
  {path: 'profile', component: ProfilePageComponent, canActivate: [AuthGuard]},
  {path: 'operations-history', component: OperationsHistoryPageComponent, canActivate: [AuthGuard]}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PmbRoutingModule {
}
