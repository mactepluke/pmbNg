import {Buddy} from "./buddy";
import {SpotAccount} from "./spot-account";
import {BankAccount} from "./bank-account";
import {Transaction} from "./transaction";

export class User {

  email!: string;
  password!: string;
  firstName = 'anonymous';
  lastName = 'anonymous';
  verified = false;
  buddies!: Buddy[];
  spotAccounts!: SpotAccount[];
  bankAccounts!: BankAccount[];
  transactions!: Transaction[];

}


