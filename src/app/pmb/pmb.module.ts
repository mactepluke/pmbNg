import { NgModule } from '@angular/core';
import {ProcessedPipe} from "./pipes/processed.pipe";
import {TransactionPipe} from "./pipes/transaction.pipe";
import {AmountPipe} from "./pipes/amount.pipe";
import {FeePipe} from "./pipes/fee.pipe";
import {OperationtypePipe} from "./pipes/operationtype.pipe";
import {TransferPageComponent} from "./pages/transfer-page/transfer-page.component";
import {ProfilePageComponent} from "./pages/profile-page/profile-page.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {SpotAccountsComponent} from "./components/spot-accounts/spot-accounts.component";
import {BankAccountsComponent} from "./components/bank-accounts/bank-accounts.component";
import {RecipientsComponent} from "./components/recipients/recipients.component";
import {OperationsHistoryPageComponent} from "./pages/operations-history-page/operations-history-page.component";
import {CascadeSelectModule} from "primeng/cascadeselect";
import {DropdownModule} from "primeng/dropdown";
import {InputNumberModule} from "primeng/inputnumber";
import {TableModule} from "primeng/table";
import {AvatarModule} from "primeng/avatar";
import {TagModule} from "primeng/tag";
import {PmbRoutingModule} from "./pmb-routing.module";
import {BankAccountService} from "./services/bank-account.service";
import {OperationService} from "./services/operation.service";
import {PaymentService} from "./services/payment.service";
import {RecipientService} from "./services/recipient.service";
import {SpotAccountService} from "./services/spot-account.service";
import {SharedModule} from "../shared/shared.module";


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
    OperationsHistoryPageComponent
  ],
  imports: [
    PmbRoutingModule,
    SharedModule,
    CascadeSelectModule,
    DropdownModule,
    InputNumberModule,
    TableModule,
    AvatarModule,
    TagModule
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
