import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {ButtonModule} from "primeng/button";
import {CardModule} from "primeng/card";
import {PasswordModule} from "primeng/password";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {RippleModule} from "primeng/ripple";
import {DialogModule} from "primeng/dialog";
import {AddbuddyDialogComponent} from "./components/addbuddy-dialog/addbuddy-dialog.component";


@NgModule({
  declarations: [
    AddbuddyDialogComponent
  ],
  imports: [
    /** These imports are only mandatory because we are using them into the shared component 'addbuddy-dialog,
     *  otherwise we can only have the 'import' statements at the top and add them to the 'exports',
     *  so they can be used by the modules that import the shared module.
     * */
    CommonModule,
    ButtonModule,
    DialogModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule
  ],
  exports: [
    CommonModule,
    ButtonModule,
    CardModule,
    PasswordModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    ConfirmDialogModule,
    RippleModule,
    DialogModule,
    AddbuddyDialogComponent
  ]
})
export class SharedModule {
}
