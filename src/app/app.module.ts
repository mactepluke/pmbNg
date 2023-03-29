import {NgModule} from "@angular/core";
import {AppComponent} from './app.component';
import {CoreModule} from "./core/core.module";
import {AppRoutingModule} from "./app-routing.module";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AuthModule} from "./auth/auth.module";
import {ToastModule} from "primeng/toast";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    AuthModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    ToastModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
