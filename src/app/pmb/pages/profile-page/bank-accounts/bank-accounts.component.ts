import {Component, OnInit} from '@angular/core';
import {BankAccount} from "../../../models/bank-account";
import {BankAccountService} from "../../../services/bank-account.service";
import {Observable, shareReplay, switchMap, tap} from "rxjs";
import {ConfirmationService, MessageService} from "primeng/api";
import {AuthService} from "../../../../core/services/auth.service";

@Component({
  selector: 'app-bank-accounts',
  templateUrl: './bank-accounts.component.html',
  styleUrls: ['./bank-accounts.component.css']
})
export class BankAccountsComponent implements OnInit {
  bankAccounts$!: Observable<BankAccount[]>;
  dialog!: boolean;
  submitted!: boolean;
  bankAccount!: BankAccount;
  bankAccountsLength!: number;

  constructor(private bankAccountService: BankAccountService,
              private authService: AuthService,
              private confirmationService: ConfirmationService,
              private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.bankAccounts$ = this.bankAccountService.findBankAccounts(this.authService.currentUser)
      .pipe(tap((banksAccounts) => {
        (banksAccounts === null) ? this.bankAccountsLength = 0 : this.bankAccountsLength = banksAccounts.length
      }), shareReplay({bufferSize: 1, refCount: true}));
  }

  onAddBankAccount() {
    this.bankAccount = new BankAccount();
    this.submitted = false;
    this.dialog = true;
  }

  hideDialog() {
    this.dialog = false;
    this.submitted = false;
  }

  saveBankAccount() {
    this.submitted = true;

    if ((this.bankAccount.name.length > 0)
      && (this.bankAccount.iban.length <= 34)
      && (this.bankAccount.iban.length >= 30)) {
      this.bankAccounts$ = this.bankAccountService.createBankAccount(this.authService.currentUser, this.bankAccount.name, this.bankAccount.iban)
        .pipe(switchMap(() => this.bankAccountService.findBankAccounts(this.authService.currentUser)),
          tap((bankAccounts) => {

            if (bankAccounts.length > this.bankAccountsLength) {
              this.messageService.add({
                severity: 'success',
                summary: 'Successful',
                detail: 'Bank account Created',
                life: 3000
              });
              this.bankAccountsLength = bankAccounts.length;
            } else {
              this.messageService.add({
                severity: 'error',
                summary: 'Could not create account',
                detail: 'IBAN may already exist',
                life: 3000
              });
            }
            this.dialog = false;
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
  }

  deleteBankAccount(bankAccount: BankAccount) {
    console.log("Delete button is hit.");
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + bankAccount.name + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      key: 'bankaccountdialog',
      accept: () => {
        this.bankAccounts$ = this.bankAccountService.deleteBankAccount(this.authService.currentUser, bankAccount.iban)
          .pipe(switchMap(() => this.bankAccountService.findBankAccounts(this.authService.currentUser)),
            tap((banksAccounts) => {

              if (banksAccounts.length < this.bankAccountsLength) {
                this.messageService.add({
                  severity: 'success',
                  summary: 'Successful',
                  detail: 'Bank account Deleted',
                  life: 3000
                });
                this.bankAccountsLength = banksAccounts.length;
              } else {
                this.messageService.add({
                  severity: 'error',
                  summary: 'Could not delete account',
                  detail: 'Internal server error',
                  life: 3000
                });
              }
              this.dialog = false;
            }),
            shareReplay({bufferSize: 1, refCount: true}))
      }
    });
  }

}
