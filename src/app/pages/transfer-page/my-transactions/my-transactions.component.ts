import {Component, Input, OnInit} from '@angular/core';
import {Payment} from "../../../model/Payment";
import {User} from "../../../model/user";
import {Observable, switchMap} from "rxjs";
import {SpotAccountService} from "../../../services/spot-account.service";
import {PaymentService} from "../../../services/payment.service";

@Component({
  selector: 'app-my-transactions',
  templateUrl: './my-transactions.component.html',
  styleUrls: ['./my-transactions.component.css']
})
export class MyTransactionsComponent implements OnInit {
  @Input() currentUser!: User;
  payments$!: Observable<Payment[]>;

  constructor(private paymentService: PaymentService) {
  }

  ngOnInit(): void {
    this.payments$ = this.paymentService.findPayments(this.currentUser.email);
  }

  onAddSpotAccount() {
/*
    this.spotAccounts$ = this.spotAccountService.createSpotAccount(this.currentUser, "EUR")
      .pipe(switchMap(() => this.spotAccountService.findSpotAccounts(this.currentUser.email)));*/

  }

}
