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
    let newUser = new User;
    newUser.email = email;
    newUser.password = password;

    //Save in DB
    console.log("New user saved.")
  }

  logIn(email: string, password: string) {
    if (!Session.loggedIn) {
      //Find in DB
      this.currentUser = new User;
      this.currentUser.email = email;
      this.currentUser.password = password;

      Session.currentUser = this.currentUser;
      Session.loggedIn = true;
      console.log('User logged in with: ', email, password)
    }
  }

  logOut() {
    if (Session.loggedIn) {
      this.currentUser = {
        email: 'not logged in',
        password: 'not logged in',
        firstName: 'anonymous',
        lastName: 'anonymous',
        verified: false,
        buddies: new Array<Buddy>(),
        spotAccounts: new Array<SpotAccount>(),
        bankAccounts: new Array<BankAccount>(),
        transactions: new Array<Transaction>()
      }
      Session.currentUser = this.currentUser;
      Session.loggedIn = false;
      console.log('User logged out.')
    }
  }

}
