import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {SpotAccount} from "../../../model/spot-account";
import {SpotAccountService} from "../../../services/spot-account.service";
import {Observable, shareReplay, switchMap, tap} from "rxjs";
import {ConfirmationService, MessageService} from "primeng/api";
import {BankAccount} from "../../../model/bank-account";
import {BankAccountService} from "../../../services/bank-account.service";
import {SessionService} from "../../../services/session.service";

@Component({
  selector: 'app-spot-accounts',
  templateUrl: './spot-accounts.component.html',
  styleUrls: ['./spot-accounts.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpotAccountsComponent implements OnInit {
  bankAccounts$!: Observable<BankAccount[]>;
  spotAccounts$!: Observable<SpotAccount[]>;
  addDialog!: boolean;
  fundsDialog!: boolean;
  spotAccount!: SpotAccount;
  notAddedYetSpotAccounts!: string[];
  alreadyAddedSpotAccounts!: SpotAccount[];
  fundsCreditOrWithdrawal!: boolean;
  bankAccounts!: BankAccount[];

  constructor(private spotAccountService: SpotAccountService,
              private bankAccountService: BankAccountService,
              private confirmationService: ConfirmationService,
              private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.spotAccount = new SpotAccount();
    this.spotAccounts$ = this.spotAccountService
      .findSpotAccounts(SessionService.currentUser)
      .pipe(shareReplay({bufferSize: 1, refCount: true}),
        tap((spotAccounts) => this.updateCurrencies(spotAccounts)));
  }

  updateCurrencies(spotAccounts: SpotAccount[]): void {

    this.alreadyAddedSpotAccounts = new Array<SpotAccount>;
    this.notAddedYetSpotAccounts = ['EUR', 'USD', 'GBP', 'CHF', 'AUD'];

    for (let spotAccount of spotAccounts) {
      this.spotAccount = new SpotAccount();
      this.spotAccount.currency = spotAccount.currency;
      this.spotAccount.credit = spotAccount.credit;
      this.alreadyAddedSpotAccounts.push(this.spotAccount);
      this.notAddedYetSpotAccounts = this.notAddedYetSpotAccounts.filter(currency => currency !== spotAccount.currency);
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
    this.spotAccounts$ = this.spotAccountService.createSpotAccount(SessionService.currentUser, this.spotAccount)
      .pipe(switchMap(() => this.spotAccountService.findSpotAccounts(SessionService.currentUser).pipe(shareReplay({
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
        this.spotAccounts$ = this.spotAccountService.deleteSpotAccount(SessionService.currentUser, spotAccount)
          .pipe(switchMap(() => this.spotAccountService.findSpotAccounts(SessionService.currentUser).pipe(shareReplay({
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
    this.bankAccounts$ = this.bankAccountService.findBankAccounts(SessionService.currentUser);
    this.spotAccount = new SpotAccount();
    this.fundsCreditOrWithdrawal = true;
    this.fundsDialog = true;
  }

  onWithDrawFunds() {
    this.bankAccounts$ = this.bankAccountService.findBankAccounts(SessionService.currentUser);
    this.spotAccount = new SpotAccount();
    this.fundsCreditOrWithdrawal = false;
    this.fundsDialog = true;
  }

  hideFundsDialog() {
    this.fundsDialog = false;
  }

  processFunds() {
    if (this.fundsCreditOrWithdrawal) {
      //Process funds credit

    } else {
      //Process funds withdrawal

    }
  }

  setBankAccounts(bankAccounts: BankAccount[]) {
    this.bankAccounts = bankAccounts;
  }
}
