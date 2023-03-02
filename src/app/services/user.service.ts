import {Injectable, OnInit} from '@angular/core';
import {User} from "../model/user";
import {SessionService} from "./session.service";
import {Buddy} from "../model/buddy";
import {SpotAccount} from "../model/spot-account";
import {BankAccount} from "../model/bank-account";
import {Transaction} from "../model/transaction";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService /*implements OnInit*/ {
  user!: User;

  // private httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Authorization': 'Basic ' + btoa('user:password')
  //   })
  // };


  constructor(private http: HttpClient, private sessionService: SessionService) {
  }


  createAccount(formValue: { email: string, password: string }): Observable<User> {
    this.user = {
      ...formValue,
      firstName: 'anonymous',
      lastName: 'anonymous',
      verified: false,
      buddies: new Array<Buddy>(),
      spotAccounts: new Array<SpotAccount>(),
      bankAccounts: new Array<BankAccount>(),
      transactions: new Array<Transaction>()
    }
    return this.saveUser(this.user);
  }

  saveUser(user: User): Observable<User> {
    return this.http.post<User>(`http://localhost:8080/pmbuser/create?email=${user.email}&password=${user.password}`, '', undefined);
  }

}
