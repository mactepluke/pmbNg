import {User} from "../model/user";
import {Injectable} from "@angular/core";
import {UserService} from "./user.service";
import {EMPTY, exhaustMap, NEVER, Observable, of, Subject, switchMap, takeUntil, tap} from "rxjs";
import {Recipient} from "../model/recipient";
import {SpotAccount} from "../model/spot-account";
import {BankAccount} from "../model/bank-account";
import {Payment} from "../model/Payment";

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private static _currentUser: User;
  private static _isLoggedIn = false;

  static get currentUser(): User {
    return this._currentUser;
  }

  static set currentUser(value: User) {
    this._currentUser = value;
  }

  static get isLoggedIn(): boolean {
    return this._isLoggedIn;
  }

  static set isLoggedIn(value: boolean) {
    this._isLoggedIn = value;
  }

  constructor(private userService: UserService) {
    console.log(SessionService.currentUser);
  }


  logIn(formValue: { email: string, password: string }): Observable<User> {
    let attemptUser: User;

    attemptUser = {
      ...formValue,
      firstName: 'anonymous',
      lastName: 'anonymous',
      verified: false,
      recipients: new Array<Recipient>(),
      spotAccounts: new Array<SpotAccount>(),
      bankAccounts: new Array<BankAccount>(),
      transactions: new Array<Payment>()
    };

    return this.userService.loginUser(attemptUser.email, attemptUser.password);
  }

//TODO rajouter des unsubscribe partout où il faut
  logOut() {
    SessionService.isLoggedIn = false;
    console.log('User logged out.')
  }

}
