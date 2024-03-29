import {Recipient} from "./recipient";
import {SpotAccount} from "./spot-account";
import {BankAccount} from "./bank-account";
import {Payment} from "./Payment";

export class User {

  email = '';
  password = '';
  firstName = '(unknown)';
  lastName = '(unknown)';
  verified = false;
  recipients!: Recipient[];
  spotAccounts!: SpotAccount[];
  bankAccounts!: BankAccount[];
  transactions!: Payment[];
}


