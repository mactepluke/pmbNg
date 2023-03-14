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
  dialog!: boolean;
  submitted!: boolean;
  spotAccount!: SpotAccount;
  currencies!: any[];

  constructor(private spotAccountService: SpotAccountService, private confirmationService: ConfirmationService, private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.spotAccounts$ = this.spotAccountService.findSpotAccounts(this.currentUser);
    this.currencies =  [
      {label: 'EUR', value: 'EUR'},
      {label: 'USD', value: 'USD'},
      {label: 'GBP', value: 'GBP'},
      {label: 'CHF', value: 'CHF'},
      {label: 'AUD', value: 'AUD'},
    ];
  }

  onAddSpotAccount() {
    this.spotAccount = new SpotAccount();
    this.submitted = false;
    this.dialog = true;
  }

  hideDialog() {
    this.dialog = false;
    this.submitted = false;
  }
//TODO les opérations sur le spot account ne sont plus rafraichies automatiquement
  saveSpotAccount() {
    this.submitted = true;

    this.spotAccounts$ = this.spotAccountService.createSpotAccount(this.currentUser, this.spotAccount.currency)
      .pipe(switchMap(() => this.spotAccountService.findSpotAccounts(this.currentUser)),
        tap(
          () => {
            this.messageService.add({
              severity: 'success',
              summary: 'Successful',
              detail: 'Spot account Created',
              life: 3000
            });
          })
      );
    this.dialog = false;
  }

  deleteSpotAccount(spotAccount: SpotAccount) {
    console.log("Delete button is hit.");
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + spotAccount.currency + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.spotAccounts$ = this.spotAccountService.deleteSpotAccount(this.currentUser, spotAccount.currency)
          .pipe(switchMap(() => this.spotAccountService.findSpotAccounts(this.currentUser)),
            tap(
              () => {
                this.messageService.add({
                  severity: 'success',
                  summary: 'Successful',
                  detail: 'Spot Account Deleted',
                  life: 3000
                })
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
