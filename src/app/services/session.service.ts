import {User} from "../model/user";
import {Injectable} from "@angular/core";
import {UserService} from "./user.service";
import {EMPTY, exhaustMap, NEVER, Observable, of, Subject, switchMap, takeUntil, tap} from "rxjs";
import {Buddy} from "../model/buddy";
import {SpotAccount} from "../model/spot-account";
import {BankAccount} from "../model/bank-account";
import {Transaction} from "../model/transaction";

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private static currentUser: User;
  private static _currentUser$: Observable<User>;
  private unsubscribe$ = new Subject<void>();
  private static _subjectUser$: Subject<User>;

  constructor(private userService: UserService) {
    SessionService.currentUser = new User();
    SessionService.currentUser.email = 'not logged in';
  }

  static get currentUser$(): Observable<User> {
    return this._currentUser$;
  }

  static get subjectUser$(): Subject<User> {
    return this._subjectUser$;
  }

  getCurrentUser(): User {
    return SessionService.currentUser;
  }

  updateCurrentUser(user: User) {
    SessionService.currentUser = user;
  }

  logIn(formValue: { email: string, password: string }) {
    let attemptUser: User;

    attemptUser = {
      ...formValue,
      firstName: 'anonymous',
      lastName: 'anonymous',
      verified: false,
      buddies: new Array<Buddy>(),
      spotAccounts: new Array<SpotAccount>(),
      bankAccounts: new Array<BankAccount>(),
      transactions: new Array<Transaction>()
    };

    SessionService._currentUser$ = this.userService.loginUser(attemptUser.email, attemptUser.password);
  }

  logOut() {
    SessionService._currentUser$ = EMPTY;
    console.log('User logged out.')
  }

}
