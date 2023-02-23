import { Injectable } from '@angular/core';
import {SpotAccount} from "../model/spot-account";
import {Session} from "../session";
import {UserService} from "./user.service";

@Injectable({
  providedIn: 'root'
})
export class SpotAccountService {

  constructor(private userService: UserService) { }

  createSpotAccount(currency: string, credit: number) {
    let newSpotAccount = new SpotAccount(currency, credit);
    Session.currentUser.spotAccounts.push(newSpotAccount);
    console.log("Created spot account.");
    this.userService.persistCurrentUser();
  }
}
