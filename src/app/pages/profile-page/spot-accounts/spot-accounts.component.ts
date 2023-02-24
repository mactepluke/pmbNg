import {ChangeDetectionStrategy, Component, Input, OnChanges, OnInit} from '@angular/core';
import {SpotAccount} from "../../../model/spot-account";
import {User} from "../../../model/user";
import {SpotAccountService} from "../../../services/spot-account.service";
import {Observable} from "rxjs";
import {ProfilePageComponent} from "../profile-page.component";

@Component({
  selector: 'app-spot-accounts',
  templateUrl: './spot-accounts.component.html',
  styleUrls: ['./spot-accounts.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpotAccountsComponent implements OnInit, OnChanges {
  @Input() currentUser!: User;

  public spotAccounts!: SpotAccount[]

/*
  spotAccounts: SpotAccount[] = [
    {
      currency: "EUR",
      credit: 1900
    },
    {
      currency: "USD",
      credit: 1800
    },
    {
      currency: "AUD",
      credit: 1700
    },
    {
      currency: "GBP",
      credit: 1200
    },
    {
      currency: "CHF",
      credit: 800
    },
    {
      currency: "BTC",
      credit: 0.3
    },
    {
      currency: "ETH",
      credit: 2
    }
  ];*/

  constructor(private spotAccountService: SpotAccountService) {
  }


  //Observable<Array<SpotAccount>>
  ngOnInit() {
    this.spotAccounts = this.currentUser.spotAccounts;
    //this.currentUser.spotAccounts = this.spotAccounts;
    //this.spotAccountService.getSpotAccountData().subscribe((data) => {
    //  this.spotAccounts = data
    //});
  }


  onAddSpotAccount() {
    this.spotAccountService.createSpotAccount("EUR", 24099);
  }

  ngOnChanges() {
    this.spotAccounts = this.currentUser.spotAccounts;
  }

  onCreditFunds() {
  }

  onWithDrawFunds() {

  }
}
