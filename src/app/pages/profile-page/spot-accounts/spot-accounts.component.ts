import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {SpotAccount} from "../../../model/spot-account";
import {User} from "../../../model/user";
import {SpotAccountService} from "../../../services/spot-account.service";
import {Observable, shareReplay, switchMap, tap} from "rxjs";
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
  addDialog!: boolean;
  fundsDialog!: boolean;
  spotAccount!: SpotAccount;
  currencies!: string[];
  fundsCreditOrWithdrawal!: boolean;

  constructor(private spotAccountService: SpotAccountService, private confirmationService: ConfirmationService, private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.spotAccount = new SpotAccount();
    this.spotAccounts$ = this.spotAccountService
      .findSpotAccounts(this.currentUser)
      .pipe(shareReplay({bufferSize: 1, refCount: true}),
        tap((spotAccounts) => this.updateCurrencies(spotAccounts)));
  }

  updateCurrencies(spotAccounts: SpotAccount[]): void {

    this.currencies = ['EUR', 'USD', 'GBP', 'CHF', 'AUD'];

    for (let spotAccount of spotAccounts) {
      this.currencies = this.currencies.filter(currency => currency !== spotAccount.currency);
    }
  }

  onAddSpotAccount() {
    this.spotAccount = new SpotAccount();
    this.addDialog = true;
  }

  hideAddDialog() {
    this.addDialog = false;
  }

  saveSpotAccount() {

    this.spotAccounts$ = this.spotAccountService.createSpotAccount(this.currentUser, this.spotAccount.currency)
      .pipe(switchMap(() => this.spotAccountService.findSpotAccounts(this.currentUser).pipe(shareReplay({
          bufferSize: 1,
          refCount: true
        }))),
        tap(
          (spotAccounts) => {
            this.messageService.add({
              severity: 'success',
              summary: 'Successful',
              detail: 'Spot account Created',
              life: 3000
            });
            this.updateCurrencies(spotAccounts);
          })
      );
    this.addDialog = false;
  }

  deleteSpotAccount(spotAccount: SpotAccount) {
    console.log("Delete button is hit.");
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + spotAccount.currency + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      key: 'spotaccountdialog',
      accept: () => {
        this.spotAccounts$ = this.spotAccountService.deleteSpotAccount(this.currentUser, spotAccount.currency)
          .pipe(switchMap(() => this.spotAccountService.findSpotAccounts(this.currentUser).pipe(shareReplay({
              bufferSize: 1,
              refCount: true
            }))),
            tap(
              (spotAccounts) => {
                this.messageService.add({
                  severity: 'success',
                  summary: 'Successful',
                  detail: 'Spot Account Deleted',
                  life: 3000
                });
                this.updateCurrencies(spotAccounts);
              }
            ))
      }
    });
  }

  onCreditFunds() {
    this.fundsCreditOrWithdrawal = true;
    this.fundsDialog = true;
  }

  onWithDrawFunds() {
    this.fundsCreditOrWithdrawal = false;
    this.fundsDialog = true;
  }

  hideFundsDialog() {
    this.fundsDialog = false;
  }

  processFunds() {
    if (this.fundsCreditOrWithdrawal) {

    }
  }

}
