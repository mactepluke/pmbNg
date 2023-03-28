import {NgModule} from "@angular/core";
import {AppComponent} from './app.component';
import {CoreModule} from "./core/core.module";
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AuthModule} from "./auth/auth.module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    AuthModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
