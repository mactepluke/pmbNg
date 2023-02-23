import {Component, Input, OnInit} from '@angular/core';
import {SpotAccount} from "../../../model/spot-account";
import {User} from "../../../model/user";
import {SpotAccountService} from "../../../services/spot-account.service";

@Component({
  selector: 'app-spot-accounts',
  templateUrl: './spot-accounts.component.html',
  styleUrls: ['./spot-accounts.component.css']
})
export class SpotAccountsComponent implements OnInit {
  @Input() currentUser!: User;

  spotAccounts!: SpotAccount[] = [
    {
      currency: "EUR",
      credit: "1900"
    },
    {

    }
  ];

  first = 0;
  rows = 10;

  constructor(private spotAccountService: SpotAccountService) {
  }

  ngOnInit() {

  }

  next() {
    this.first = this.first + this.rows;
  }

  prev() {
    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }

  isLastPage(): boolean {
    return this.spotAccounts ? this.first === (this.spotAccounts.length - this.rows): true;
  }

  isFirstPage(): boolean {
    return this.spotAccounts ? this.first === 0 : true;
  }

  onAddSpotAccount() {
    this.spotAccountService.createSpotAccount("EUR", 24099);
  }

  onCreditFunds() {

  }

  onWithDrawFunds() {

  }
}
