import {Injectable, OnInit} from '@angular/core';
import {User} from "../model/user";
import {Session} from "../session";
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
  currentUser!: User;

  // private httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Authorization': 'Basic ' + btoa('user:password')
  //   })
  // };


  constructor(private http: HttpClient) {
  }

  createAccount(formValue: { email: string, password: string }): Observable<User> {
    this.currentUser = {
      ...formValue,
      firstName: 'anonymous',
      lastName: 'anonymous',
      verified: false,
      buddies: new Array<Buddy>(),
      spotAccounts: new Array<SpotAccount>(),
      bankAccounts: new Array<BankAccount>(),
      transactions: new Array<Transaction>()
    }
    Session.currentUser = this.currentUser;
    return this.saveCurrentUser();
  }

  logIn(formValue: { email: string, password: string }) {
    if (!Session.loggedIn) {
      //Find in DB
      this.currentUser = {
        ...formValue,
        firstName: 'anonymous',
        lastName: 'anonymous',
        verified: false,
        buddies: new Array<Buddy>(),
        spotAccounts: new Array<SpotAccount>(),
        bankAccounts: new Array<BankAccount>(),
        transactions: new Array<Transaction>()
      }

      Session.currentUser = this.currentUser;
      Session.loggedIn = true;
      console.log('User logged in with: ', this.currentUser.email, this.currentUser.password)
    }
  }

  logOut() {
    if (Session.loggedIn) {
      this.currentUser = new User();
      this.currentUser.email = 'not logged in';
      this.currentUser.password = 'not logged in';
      this.currentUser.firstName = 'anonymous';
      this.currentUser.lastName = 'anonymous';
      this.currentUser.verified = false;

      Session.currentUser = this.currentUser;
      Session.loggedIn = false;
      console.log('User logged out.')
    }
  }

  saveCurrentUser(): Observable<User> {
    // let headers_object = new HttpHeaders();
    // headers_object.append('Content-Type', 'application/json');
    // headers_object.append("Authorization", "Basic " + btoa("user:password"));
    //
    // const httpOptions = {
    //   headers: headers_object
    // };
    console.log(`http://localhost:8080/pmbuser?email=${this.currentUser.email}&password=${this.currentUser.password}`);
    return this.http.post<User>(`http://localhost:8080/pmbuser?email=${this.currentUser.email}&password=${this.currentUser.password}`, '', undefined);
  }

  getCurrentUser(): User {
    return Session.currentUser;
  }

}
