import {User} from "../../pmb/models/user";
import {Injectable} from "@angular/core";
import {UserService} from "./user.service";
import {Observable} from "rxjs";
import {Recipient} from "../../pmb/models/recipient";
import {SpotAccount} from "../../pmb/models/spot-account";
import {BankAccount} from "../../pmb/models/bank-account";
import {Payment} from "../../pmb/models/Payment";

@Injectable()
export class AuthService {
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
    console.log(attemptUser)
    return this.userService.loginUser(attemptUser.email, attemptUser.password);
  }

  logOut() {
    this.isLoggedIn = false;
    console.log('User logged out.')
  }

}
