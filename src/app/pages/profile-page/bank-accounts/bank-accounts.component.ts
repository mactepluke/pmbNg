import {Component, Input} from '@angular/core';
import {BankAccount} from "../../../model/bank-account";
import {User} from "../../../model/user";
import {BankAccountService} from "../../../services/bank-account.service";

@Component({
  selector: 'app-bank-accounts',
  templateUrl: './bank-accounts.component.html',
  styleUrls: ['./bank-accounts.component.css']
})
export class BankAccountsComponent {
  @Input() currentUser!: User;
  bankAccounts!: BankAccount[];

  constructor(private bankAccountService: BankAccountService) {
  }
}
