import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProcessedPipe} from "./pipes/processed.pipe";
import {TransactionPipe} from "./pipes/transaction.pipe";
import {AmountPipe} from "./pipes/amount.pipe";
import {FeePipe} from "./pipes/fee.pipe";
import {OperationtypePipe} from "./pipes/operationtype.pipe";
import {TransferPageComponent} from "./pages/transfer-page/transfer-page.component";
import {ProfilePageComponent} from "./pages/profile-page/profile-page.component";
import {ProfileComponent} from "./pages/profile-page/profile/profile.component";
import {SpotAccountsComponent} from "./pages/profile-page/spot-accounts/spot-accounts.component";
import {BankAccountsComponent} from "./pages/profile-page/bank-accounts/bank-accounts.component";
import {RecipientsComponent} from "./pages/profile-page/recipients/recipients.component";
import {AddbuddyDialogComponent} from "./components/addbuddy-dialog/addbuddy-dialog.component";
import {OperationsHistoryPageComponent} from "./pages/operations-history-page/operations-history-page.component";
import {CascadeSelectModule} from "primeng/cascadeselect";
import {DropdownModule} from "primeng/dropdown";
import {InputNumberModule} from "primeng/inputnumber";
import {TableModule} from "primeng/table";
import {AvatarModule} from "primeng/avatar";
import {TagModule} from "primeng/tag";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {ToastModule} from "primeng/toast";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {RippleModule} from "primeng/ripple";
import {DialogModule} from "primeng/dialog";
import {RouterModule} from "@angular/router";
import {ButtonModule} from "primeng/button";
import {CardModule} from "primeng/card";
import {PasswordModule} from "primeng/password";
import {PmbRoutingModule} from "./pmb-routing.module";
import {BankAccountService} from "./services/bank-account.service";
import {OperationService} from "./services/operation.service";
import {PaymentService} from "./services/payment.service";
import {RecipientService} from "./services/recipient.service";
import {SpotAccountService} from "./services/spot-account.service";


@NgModule({
  declarations: [
    ProcessedPipe,
    TransactionPipe,
    AmountPipe,
    FeePipe,
    OperationtypePipe,
    TransferPageComponent,
    ProfilePageComponent,
    ProfileComponent,
    SpotAccountsComponent,
    BankAccountsComponent,
    RecipientsComponent,
    AddbuddyDialogComponent,
    OperationsHistoryPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PmbRoutingModule,
    ButtonModule,
    CardModule,
    PasswordModule,
    CascadeSelectModule,
    DropdownModule,
    InputNumberModule,
    TableModule,
    AvatarModule,
    TagModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    ToastModule,
    ConfirmDialogModule,
    RippleModule,
    DialogModule,
  ],
  providers: [
    BankAccountService,
    OperationService,
    PaymentService,
    RecipientService,
    SpotAccountService
  ]
})
export class PmbModule { }
