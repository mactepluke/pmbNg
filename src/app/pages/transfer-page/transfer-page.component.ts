import {Component, OnInit} from '@angular/core';
import {User} from "../../model/user";
import {SessionService} from "../../services/session.service";
import {Observable, shareReplay, switchMap, tap} from "rxjs";
import {Router} from "@angular/router";
import {UserService} from "../../services/user.service";
import {Payment} from "../../model/Payment";
import {PaymentService} from "../../services/payment.service";
import {RecipientService} from "../../services/recipient.service";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {SpotAccount} from "../../model/spot-account";
import {SpotAccountService} from "../../services/spot-account.service";
import {ConfirmationService, MessageService} from "primeng/api";

@Component({
  selector: 'app-transfer-page',
  templateUrl: './transfer-page.component.html',
  styleUrls: ['./transfer-page.component.css']
})
export class TransferPageComponent implements OnInit {
  currentUser!: User;
  recipientUsers$!: Observable<User[]>;
  spotAccounts$!: Observable<SpotAccount[]>;
  payments$!: Observable<Payment[]>;
  paymentForm!: FormGroup;
  availableAmount!: number;
  selectedCurrency!: string;

  constructor(private fb: FormBuilder,
              private router: Router,
              private userService: UserService,
              private paymentService: PaymentService,
              private recipientService: RecipientService,
              private spotAccountService: SpotAccountService,
              private confirmationService: ConfirmationService,
              private messageService: MessageService) {
  }

  ngOnInit(): void {
    if (!SessionService.isLoggedIn) {
      this.router.navigateByUrl('paymybuddy/login');
    } else {
      this.currentUser = SessionService.currentUser;
      this.spotAccounts$ = this.spotAccountService.findSpotAccounts(this.currentUser);
      this.payments$ = this.paymentService.findPayments(this.currentUser.email);
      this.recipientUsers$ = this.recipientService
        .findRecipients(this.currentUser)
        .pipe(shareReplay({bufferSize: 1, refCount: true}))
    }
    this.paymentForm = new FormGroup({
      selectedEmail: new FormControl(),
      selectedCurrency: new FormControl(),
      amount: new FormControl(),
      description: new FormControl()
    });
    this.availableAmount = 0;
    this.selectedCurrency = "EUR";
  }


  setAvailableAmount(spotAccounts: SpotAccount[])  {
    for (let spotAccount of spotAccounts) {
      if (spotAccount.currency === this.paymentForm.controls['selectedCurrency'].value) {
        this.availableAmount = spotAccount.credit;
        this.selectedCurrency = spotAccount.currency;
      }
    }
  }

  OnPay() {

    if ((this.paymentForm.controls['selectedEmail'].value != undefined)
      && (this.paymentForm.controls['selectedCurrency'].value != undefined)
      && (this.paymentForm.controls['amount'].value > 0)) {

      this.confirmationService.confirm({
        message: 'Are you sure you want to send '
          + this.paymentForm.controls['amount'].value
          + ' '
          + this.paymentForm.controls['selectedCurrency'].value
          + ' to '
          + this.paymentForm.controls['selectedEmail'].value
          + '? (the amount actually sent may be smaller if funds are insufficient to pay the fee)',
        header: 'Confirm',
        icon: 'pi pi-exclamation-triangle',
        key: 'paymentdialog',
        accept: () => {
          this.payments$ = this.paymentService.createPayment(this.currentUser, this.paymentForm.controls['selectedEmail'].value, this.paymentForm.controls['description'].value, this.paymentForm.controls['amount'].value, this.paymentForm.controls['selectedCurrency'].value)
            .pipe(switchMap(() => this.paymentService.findPayments(this.currentUser.email)),
              tap(
                () => {
                  this.messageService.add({
                    severity: 'success',
                    summary: 'Successful',
                    detail: 'Payment sent',
                    life: 3000
                  })
                }
              ))
        }
      });
    } else {
      console.log("INVALID VALUES");
      this.messageService.add({
        severity: 'warn',
        summary: 'Cannot send payment',
        detail: 'Invalid values',
        life: 3000})
    }
  }
}
