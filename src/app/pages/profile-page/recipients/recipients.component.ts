import {Component, Input, OnInit} from '@angular/core';
import {Recipient} from "../../../model/recipient";
import {User} from "../../../model/user";
import {RecipientService} from "../../../services/./recipient.service";
import {Observable, switchMap} from "rxjs";

@Component({
  selector: 'app-recipients',
  templateUrl: './recipients.component.html',
  styleUrls: ['./recipients.component.css']
})
export class RecipientsComponent implements OnInit {
  @Input() currentUser!: User;
  recipients$!: Observable<Recipient[]>;

  constructor(private recipientService: RecipientService) {
  }

  ngOnInit(): void {
    this.recipients$ = this.recipientService.findRecipients(this.currentUser.email);
  }

  onAddBuddy() {
    this.recipients$ = this.recipientService.createRecipient(this.currentUser, '1@front.fr')
      .pipe(switchMap(() => this.recipientService.findRecipients(this.currentUser.email)));
  }
}
