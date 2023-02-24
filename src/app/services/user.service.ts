import {Injectable, OnInit} from '@angular/core';
import {User} from "../model/user";
import {ProfilePageComponent} from "../pages/profile-page/profile-page.component";
import {Session} from "../session";
import {Buddy} from "../model/buddy";
import {SpotAccount} from "../model/spot-account";
import {BankAccount} from "../model/bank-account";
import {Transaction} from "../model/transaction";

@Injectable({
  providedIn: 'root'
})
export class UserService /*implements OnInit*/ {
  currentUser!: User;

  constructor() {
  }

  createAccount(email: string, password: string) {
    this.currentUser = {
      email: email,
      password: password,
      firstName: 'anonymous',
      lastName: 'anonymous',
      verified: false,
      buddies: new Array<Buddy>(),
      spotAccounts: new Array<SpotAccount>(),
      bankAccounts: new Array<BankAccount>(),
      transactions: new Array<Transaction>()
    }

    this.persistUser(this.currentUser);
  }

  logIn(email: string, password: string) {
    if (!Session.loggedIn) {
      //Find in DB
      this.currentUser = {
        email: email,
        password: password,
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
      console.log('User logged in with: ', email, password)
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

  persistUser(newUser: User) {
    if (Session.loggedIn) {
      //Save in DB
      console.log("User info saved.")
    }
  }

  persistCurrentUser() {
    if (Session.loggedIn) {
      //Save in DB
      console.log("User info updated.")
    }
  }

  getCurrentUser(): User {
    return Session.currentUser;
  }

}
