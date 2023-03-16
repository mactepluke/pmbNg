import {Component, OnInit} from '@angular/core';
import {User} from "../../model/user";
import {SessionService} from "../../services/session.service";
import {Observable, shareReplay, switchMap} from "rxjs";
import {Router} from "@angular/router";
import {UserService} from "../../services/user.service";
import {Payment} from "../../model/Payment";
import {PaymentService} from "../../services/payment.service";
import {RecipientService} from "../../services/recipient.service";

@Component({
  selector: 'app-transfer-page',
  templateUrl: './transfer-page.component.html',
  styleUrls: ['./transfer-page.component.css']
})
export class TransferPageComponent implements OnInit {
  currentUser!: User;
  recipientUsers$!: Observable<User[]>;
  payments$!: Observable<Payment[]>;

  constructor(private router: Router, private userService: UserService, private paymentService: PaymentService, private recipientService: RecipientService) {
  }

  ngOnInit(): void {
    if (!SessionService.isLoggedIn) {
      this.router.navigateByUrl('paymybuddy/login');
    } else {
      this.currentUser = SessionService.currentUser;
      this.payments$ = this.paymentService.findPayments(this.currentUser.email);
      this.recipientUsers$ = this.recipientService
        .findRecipients(this.currentUser)
        .pipe(shareReplay({bufferSize: 1, refCount: true}))
    }
  }

  OnPay(email: string) {
    this.payments$ = this.paymentService.createPayment(this.currentUser, email, "paiement test", 10, "EUR")
      .pipe(switchMap(() => this.paymentService.findPayments(this.currentUser.email)));
  }
}
