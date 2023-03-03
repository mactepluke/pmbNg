import { Injectable } from '@angular/core';
import {SpotAccount} from "../model/spot-account";
import {SessionService} from "./session.service";
import {UserService} from "./user.service";
import {Observable} from "rxjs";
import {User} from "../model/user";

@Injectable({
  providedIn: 'root'
})
export class SpotAccountService {

  constructor(private sessionService: SessionService, private userService: UserService) { }

  createSpotAccount(user: User, currency: string, credit: number): Observable<User> {
    let newSpotAccount = new SpotAccount(currency, credit);
    user.spotAccounts.push(newSpotAccount);
    console.log("Created spot account.");

    return this.userService.updateUser(user);
  }

}
