import {Component, Input, OnInit} from '@angular/core';
import {Recipient} from "../../../model/recipient";
import {User} from "../../../model/user";
import {RecipientService} from "../../../services/./recipient.service";
import {Observable, switchMap, tap} from "rxjs";
import {SpotAccount} from "../../../model/spot-account";
import {ConfirmationService, MessageService} from "primeng/api";
import {BankAccount} from "../../../model/bank-account";

@Component({
  selector: 'app-recipients',
  templateUrl: './recipients.component.html',
  styleUrls: ['./recipients.component.css']
})
export class RecipientsComponent implements OnInit {
  @Input() currentUser!: User;
  recipients$!: Observable<Recipient[]>;
  dialog!: boolean;
  submitted!: boolean;
  recipient!: Recipient;

  constructor(private recipientService: RecipientService, private confirmationService: ConfirmationService, private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.recipients$ = this.recipientService.findRecipients(this.currentUser);
  }

  onAddBuddy() {
    this.recipient = new Recipient();
    this.submitted = false;
    this.dialog = true;
  }

  hideDialog() {
    this.dialog = false;
    this.submitted = false;
  }

  saveSpotAccount() {
    this.submitted = true;

    this.recipients$ = this.recipientService.createRecipient(this.currentUser, this.recipient.recipientEmail)
      .pipe(switchMap(() => this.recipientService.findRecipients(this.currentUser)),
        tap(
          () => {
            this.messageService.add({
              severity: 'success',
              summary: 'Successful',
              detail: 'Buddy Added',
              life: 3000
            });
          })
      );
    this.dialog = false;
  }

  deleteBuddy(recipient: Recipient) {
    console.log("Delete button is hit.");
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + recipient.recipientEmail + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.recipients$ = this.recipientService.deleteRecipient(this.currentUser, recipient.recipientEmail)
          .pipe(switchMap(() => this.recipientService.findRecipients(this.currentUser)),
            tap(
              () => {
                this.messageService.add({
                  severity: 'success',
                  summary: 'Successful',
                  detail: 'recipient Deleted',
                  life: 3000
                })
              }
            ))
      }
    });
  }
}
