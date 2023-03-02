import {User} from "../model/user";
import {Buddy} from "../model/buddy";
import {SpotAccount} from "../model/spot-account";
import {BankAccount} from "../model/bank-account";
import {Transaction} from "../model/transaction";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private static currentUser: User;
  private static loggedIn = false;

  constructor() {
    SessionService.currentUser =
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
  }

  isLoggedIn(): boolean {
    return SessionService.loggedIn;
}

  getCurrentUser(): User{
    return SessionService.currentUser;
  }

  updateCurrentUser(user: User) {
    SessionService.currentUser = user;
  }

  logIn(formValue: { email: string, password: string }) {
    if (!SessionService.loggedIn) {
      //TODO userService.findUser

      SessionService.currentUser = {
        ...formValue,
        firstName: 'anonymous',
        lastName: 'anonymous',
        verified: false,
        buddies: new Array<Buddy>(),
        spotAccounts: new Array<SpotAccount>(),
        bankAccounts: new Array<BankAccount>(),
        transactions: new Array<Transaction>()
      };
      SessionService.loggedIn = true;

      console.log('User logged in with: ', SessionService.currentUser.email, SessionService.currentUser.password)
    }
  }

  logOut() {
    if (SessionService.loggedIn) {
      SessionService.currentUser.email = 'not logged in';
      SessionService.currentUser.password = 'not logged in';
      SessionService.currentUser.firstName = 'anonymous';
      SessionService.currentUser.lastName = 'anonymous';
      SessionService.currentUser.verified = false;

      SessionService.loggedIn = false;

      console.log('User logged out.')
    }
  }

}
