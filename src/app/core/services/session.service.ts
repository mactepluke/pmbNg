import {User} from "../models/user";
import {Injectable} from "@angular/core";
import {UserService} from "./user.service";
import {Observable} from "rxjs";
import {Recipient} from "../models/recipient";
import {SpotAccount} from "../models/spot-account";
import {BankAccount} from "../models/bank-account";
import {Payment} from "../models/Payment";

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private _currentUser!: User;
  private _isLoggedIn = false;

  get currentUser(): User {
    return this._currentUser;
  }

  set currentUser(value: User) {
    this._currentUser = value;
  }

  get isLoggedIn(): boolean {
    return this._isLoggedIn;
  }

  set isLoggedIn(value: boolean) {
    this._isLoggedIn = value;
  }

  constructor(private userService: UserService) {
    console.log(this._currentUser);
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
    this._isLoggedIn = false;
    console.log('User logged out.')
  }

}
