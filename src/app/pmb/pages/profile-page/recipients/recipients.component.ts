import {Component, OnInit} from '@angular/core';
import {User} from "../../../models/user";
import {RecipientService} from "../../../services/recipient.service";
import {Observable, switchMap, tap, shareReplay} from "rxjs";
import {ConfirmationService, MessageService} from "primeng/api";
import {SessionService} from "../../../../core/services/session.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-recipients',
  templateUrl: './recipients.component.html',
  styleUrls: ['./recipients.component.css']
})
export class RecipientsComponent implements OnInit {
  recipientUsers$!: Observable<User[]>;

  constructor(private sessionService: SessionService,
              private recipientService: RecipientService,
              private confirmationService: ConfirmationService,
              private messageService: MessageService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.recipientUsers$ = this.recipientService
      .findRecipients(this.sessionService.currentUser)
      .pipe(shareReplay({bufferSize: 1, refCount: true}))
  }

  deleteBuddy(recipientUser
                :
                User
  ) {
    console.log("Delete button is hit.");
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + recipientUser.email + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      key: 'recipientdialog',
      accept: () => {
        this.recipientUsers$ = this.recipientService.deleteRecipient(this.sessionService.currentUser, recipientUser.email)
          .pipe(switchMap(() => this.recipientService.findRecipients(this.sessionService.currentUser)),
            tap(
              () => {
                this.messageService.add({
                  severity: 'success',
                  summary: 'Successful',
                  detail: 'recipient Deleted',
                  life: 3000
                })
              }
            ),
            shareReplay({bufferSize: 1, refCount: true})
          )
      }
    });
  }

  onSendMoney() {
    this.router.navigateByUrl('paymybuddy/pmb/transfer');
  }
}
