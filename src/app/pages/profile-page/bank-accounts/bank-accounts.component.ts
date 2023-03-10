import {Component, Input, OnInit} from '@angular/core';
import {BankAccount} from "../../../model/bank-account";
import {User} from "../../../model/user";
import {BankAccountService} from "../../../services/bank-account.service";
import {Observable, switchMap} from "rxjs";

@Component({
  selector: 'app-bank-accounts',
  templateUrl: './bank-accounts.component.html',
  styleUrls: ['./bank-accounts.component.css']
})
export class BankAccountsComponent implements OnInit {
  @Input() currentUser!: User;
  bankAccounts$!: Observable<BankAccount[]>;

  constructor(private bankAccountService: BankAccountService) {
  }

  ngOnInit(): void {
    this.bankAccounts$ = this.bankAccountService.findBankAccounts(this.currentUser.email);
  }

  onAddBankAccount() {

    this.bankAccounts$ = this.bankAccountService.createBankAccount(this.currentUser, "SG","SOGEFRPP13130942132128")
      .pipe(switchMap(() => this.bankAccountService.findBankAccounts(this.currentUser.email)));

  }
}
