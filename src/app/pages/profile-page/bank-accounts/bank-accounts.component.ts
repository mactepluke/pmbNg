import {Component, Input, OnInit} from '@angular/core';
import {BankAccount} from "../../../model/bank-account";
import {User} from "../../../model/user";
import {BankAccountService} from "../../../services/bank-account.service";
import {Observable, switchMap, tap} from "rxjs";
import {ConfirmationService, MessageService} from "primeng/api";

@Component({
  selector: 'app-bank-accounts',
  templateUrl: './bank-accounts.component.html',
  styleUrls: ['./bank-accounts.component.css']
})
export class BankAccountsComponent implements OnInit {
  @Input() currentUser!: User;
  bankAccounts$!: Observable<BankAccount[]>;
  dialog!: boolean;
  submitted!: boolean;
  bankAccount!: BankAccount;

  constructor(private bankAccountService: BankAccountService, private confirmationService: ConfirmationService, private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.bankAccounts$ = this.bankAccountService.findBankAccounts(this.currentUser);
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

  saveSpotAccount() {
    this.submitted = true;

    this.bankAccounts$ = this.bankAccountService.createBankAccount(this.currentUser, this.bankAccount.name,this.bankAccount.iban)
      .pipe(switchMap(() => this.bankAccountService.findBankAccounts(this.currentUser)),
        tap(
          () => {
            this.messageService.add({
              severity: 'success',
              summary: 'Successful',
              detail: 'Bank account Created',
              life: 3000
            });
          })
      );
    this.dialog = false;
  }

  deleteBankAccount(bankAccount: BankAccount) {
    console.log("Delete button is hit.");
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + bankAccount.name + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.bankAccounts$ = this.bankAccountService.deleteBankAccount(this.currentUser, bankAccount.iban)
          .pipe(switchMap(() => this.bankAccountService.findBankAccounts(this.currentUser)),
            tap(
              () => {
                this.messageService.add({
                  severity: 'success',
                  summary: 'Successful',
                  detail: 'Bank Account Deleted',
                  life: 3000
                })
              }
            ))
      }
    });
  }

}
