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
  private user!: User;

  constructor(private sessionService: SessionService, private userService: UserService) { }

  createSpotAccount(currency: string, credit: number) {
    let newSpotAccount = new SpotAccount(currency, credit);
    this.user = this.sessionService.getCurrentUser();
    this.user.spotAccounts.push(newSpotAccount);
    this.sessionService.updateCurrentUser(this.user);
    console.log("Created spot account.");
    this.userService.saveUser(this.user);
  }
/*
  getSpotAccountData(): Observable<Array<SpotAccount>> {
    return this.userService.getCurrentUser().spotAccounts;
  }*/
}
