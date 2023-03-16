import {Component, EventEmitter, Input, Output} from '@angular/core';
import {User} from "../../model/user";
import {Observable, shareReplay, switchMap, tap} from "rxjs";
import {RecipientService} from "../../services/recipient.service";
import {ConfirmationService, MessageService} from "primeng/api";
import {SessionService} from "../../services/session.service";

@Component({
  selector: 'app-addbuddy-dialog',
  templateUrl: './addbuddy-dialog.component.html',
  styleUrls: ['./addbuddy-dialog.component.css']
})
export class AddbuddyDialogComponent {
  dialog!: boolean;
  submitted!: boolean;
  recipientUser!: User;
  @Input() recipientUsers$!: Observable<User[]>;
  @Output() recipientUsers$Change: EventEmitter<Observable<User[]>> = new EventEmitter<Observable<User[]>>();

  constructor(private recipientService: RecipientService, private confirmationService: ConfirmationService, private messageService: MessageService) {
  }

  onAddBuddy() {
    this.recipientUser = new User();
    this.submitted = false;
    this.dialog = true;
  }

  hideDialog() {
    this.dialog = false;
    this.submitted = false;
  }

  saveRecipient() {
    this.submitted = true;

    this.recipientUsers$ = this.recipientService.createRecipient(SessionService.currentUser, this.recipientUser.email)
      .pipe(switchMap(() => this.recipientService.findRecipients(SessionService.currentUser)),
        tap(
          () => {
            this.recipientUsers$Change.emit(this.recipientUsers$);
            this.messageService.add({
              severity: 'success',
              summary: 'Successful',
              detail: 'Buddy Added',
              life: 3000
            });
          }),
      shareReplay({ bufferSize: 1, refCount: true })
      );
    this.dialog = false;
  }

}
