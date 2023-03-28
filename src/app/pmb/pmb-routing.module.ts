import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {TransferPageComponent} from "./pages/transfer-page/transfer-page.component";
import {ProfilePageComponent} from "./pages/profile-page/profile-page.component";
import {OperationsHistoryPageComponent} from "./pages/operations-history-page/operations-history-page.component";

const routes: Routes = [
  {path: 'transfer', component: TransferPageComponent},
  {path: 'profile', component: ProfilePageComponent},
  {path: 'operations-history', component: OperationsHistoryPageComponent}
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
