import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {SpotAccount} from "../../../model/spot-account";
import {SpotAccountService} from "../../../services/spot-account.service";
import {Observable, shareReplay, switchMap, tap} from "rxjs";
import {ConfirmationService, MessageService} from "primeng/api";
import {BankAccount} from "../../../model/bank-account";
import {BankAccountService} from "../../../services/bank-account.service";
import {SessionService} from "../../../services/session.service";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {OperationService} from "../../../services/operation.service";
import {Router} from "@angular/router";

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
  amount!: number;
  fundsForm!: FormGroup;
  submitted!: boolean;

  constructor(private fb: FormBuilder,
              private router: Router,
              private sessionService: SessionService,
              private spotAccountService: SpotAccountService,
              private bankAccountService: BankAccountService,
              private operationService: OperationService,
              private confirmationService: ConfirmationService,
              private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.spotAccount = new SpotAccount();
    this.spotAccounts$ = this.spotAccountService
      .findSpotAccounts(this.sessionService.currentUser)
      .pipe(shareReplay({bufferSize: 1, refCount: true}),
        tap((spotAccounts) => this.updateCurrencies(spotAccounts)));

    this.fundsForm = new FormGroup({
      selectedBankAccountIban: new FormControl()
    });
  }

  updateCurrencies(spotAccounts: SpotAccount[]): void {

    this.alreadyAddedSpotAccounts = new Array<SpotAccount>;
    this.notAddedYetSpotAccounts = ['EUR', 'USD', 'GBP', 'CHF', 'AUD'];

    if (spotAccounts.length > 0) {
      for (let spotAccount of spotAccounts) {
        this.spotAccount = new SpotAccount();
        this.spotAccount.currency = spotAccount.currency;
        this.spotAccount.credit = spotAccount.credit;
        this.alreadyAddedSpotAccounts.push(this.spotAccount);
        this.notAddedYetSpotAccounts = this.notAddedYetSpotAccounts.filter(currency => currency !== spotAccount.currency);
      }
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
    this.spotAccounts$ = this.spotAccountService.createSpotAccount(this.sessionService.currentUser, this.spotAccount)
      .pipe(switchMap(() => this.spotAccountService.findSpotAccounts(this.sessionService.currentUser).pipe(shareReplay({
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
        this.spotAccounts$ = this.spotAccountService.deleteSpotAccount(this.sessionService.currentUser, spotAccount)
          .pipe(switchMap(() => this.spotAccountService.findSpotAccounts(this.sessionService.currentUser).pipe(shareReplay({
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

  initializeFundsDialog() {
    this.submitted = false;
    this.amount = 0;
    this.bankAccounts$ = this.bankAccountService.findBankAccounts(this.sessionService.currentUser);
    this.fundsDialog = true;
  }

  onCreditFunds() {
    this.initializeFundsDialog();
    this.fundsCreditOrWithdrawal = true;

  }

  onWithDrawFunds() {
    this.initializeFundsDialog();
    this.fundsCreditOrWithdrawal = false;
  }

  hideFundsDialog() {
    this.fundsDialog = false;
  }

  processFunds() {

    this.submitted = true;
    if (this.fundsCreditOrWithdrawal) {
      //Process spot account credit
      if ((this.fundsForm.controls['selectedBankAccountIban'].value != undefined) && (this.amount > 0)) {

        this.spotAccounts$ = this.operationService.creditSpotAccount(
          this.sessionService.currentUser,
          this.spotAccount,
          this.fundsForm.controls['selectedBankAccountIban'].value,
          this.amount
        )
          .pipe(switchMap(() => this.spotAccountService.findSpotAccounts(this.sessionService.currentUser)),
            tap((spotAccounts) => {

                this.messageService.add({
                  severity: 'success',
                  summary: 'Successful',
                  detail: 'Credit request sent to bank.',
                  life: 3000
                });
              this.hideFundsDialog();
              this.updateCurrencies(spotAccounts);
            }),
            shareReplay({bufferSize: 1, refCount: true})
          );
      } else {
        this.messageService.add({
          severity: 'warn',
          summary: 'Cannot create account',
          detail: 'Invalid values',
          life: 3000
        })
      }


    } else {
      //Process funds withdrawal
      if ((this.fundsForm.controls['selectedBankAccountIban'].value != undefined) && (this.amount > 0)) {

        this.spotAccounts$ = this.operationService.withdrawFunds(
          this.sessionService.currentUser,
          this.spotAccount,
          this.fundsForm.controls['selectedBankAccountIban'].value,
          this.amount
        )
          .pipe(switchMap(() => this.spotAccountService.findSpotAccounts(this.sessionService.currentUser)),
            tap((spotAccounts) => {

              this.messageService.add({
                severity: 'success',
                summary: 'Successful',
                detail: 'Withdraw request sent to bank.',
                life: 3000
              });
              this.hideFundsDialog();
              this.updateCurrencies(spotAccounts);
            }),
            shareReplay({bufferSize: 1, refCount: true})
          );
      } else {
        this.messageService.add({
          severity: 'warn',
          summary: 'Cannot withdraw funds',
          detail: 'All fields must be filled.',
          life: 3000
        })
      }
    }
  }

  onShowOperationsHistory() {
    this.router.navigateByUrl('paymybuddy/operations-history');
  }
}
