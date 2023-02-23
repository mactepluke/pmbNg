import {User} from "./model/user";
import {Buddy} from "./model/buddy";
import {SpotAccount} from "./model/spot-account";
import {BankAccount} from "./model/bank-account";
import {Transaction} from "./model/transaction";

export class Session {
  static currentUser: User =
    {
      email: 'not logged in',
      password: 'not logged in',
      firstName: 'anonymous',
      lastName: 'anonymous',
      verified: false,
      buddies: new Array<Buddy>(),
      spotAccounts: new Array<SpotAccount>(),
      bankAccounts: new Array<BankAccount>(),
      transactions: new Array<Transaction>()
    };

  static loggedIn = false;
}
