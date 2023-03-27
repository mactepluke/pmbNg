import {NgModule} from "@angular/core";
import {AppComponent} from './app.component';
import {CoreModule} from "./core/core.module";
import {RouterModule} from "@angular/router";
import {ToastModule} from "primeng/toast";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    RouterModule,
    ToastModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
