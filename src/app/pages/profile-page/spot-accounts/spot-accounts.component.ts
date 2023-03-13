import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {SpotAccount} from "../../../model/spot-account";
import {User} from "../../../model/user";
import {SpotAccountService} from "../../../services/spot-account.service";
import {Observable, switchMap, tap} from "rxjs";
import {ConfirmationService, MessageService} from "primeng/api";

@Component({
  selector: 'app-spot-accounts',
  templateUrl: './spot-accounts.component.html',
  styleUrls: ['./spot-accounts.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpotAccountsComponent implements OnInit {

  @Input() currentUser!: User;
  spotAccounts$!: Observable<SpotAccount[]>;

  constructor(private spotAccountService: SpotAccountService, private confirmationService: ConfirmationService, private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.spotAccounts$ = this.spotAccountService.findSpotAccounts(this.currentUser.email);
  }

  onAddSpotAccount() {

    this.spotAccounts$ = this.spotAccountService.createSpotAccount(this.currentUser, "EUR")
      .pipe(switchMap(() => this.spotAccountService.findSpotAccounts(this.currentUser.email)));

  }

  deleteSpotAccount(spotAccount: SpotAccount) {
    console.log("Delete button is hit.");
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + spotAccount.currency + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.spotAccounts$ = this.spotAccountService.deleteSpotAccount(spotAccount.currency)
          .pipe(switchMap(() => this.spotAccountService.findSpotAccounts(this.currentUser.email)),
            tap(
              () => {
                this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Deleted', life: 3000})
              }
            ))
      }
    });
  }

  onCreditFunds() {
  }

  onWithDrawFunds() {
  }
}
