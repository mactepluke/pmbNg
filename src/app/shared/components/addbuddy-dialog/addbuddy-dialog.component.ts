import {Component, EventEmitter, Input, Output} from '@angular/core';
import {User} from "../../../pmb/models/user";
import {Observable, shareReplay, switchMap, tap} from "rxjs";
import {RecipientService} from "../../../pmb/services/recipient.service";
import {ConfirmationService, MessageService} from "primeng/api";
import {AuthService} from "../../../core/services/auth.service";

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

  constructor(private recipientService: RecipientService,
              private authService: AuthService,
              private confirmationService: ConfirmationService,
              private messageService: MessageService) {
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

   if (this.recipientUser.email.length != 0) {
      this.recipientUsers$ = this.recipientService.createRecipient(this.authService.currentUser, this.recipientUser.email)
        .pipe(switchMap(() => this.recipientService.findRecipients(this.authService.currentUser)),
          tap(
            () => {
              this.recipientUsers$Change.emit(this.recipientUsers$);
              this.messageService.add({
                severity: 'success',
                summary: 'Successful',
                detail: 'Buddy Added (if exists)',
                life: 3000
              });
              this.dialog = false;
            }),
          shareReplay({bufferSize: 1, refCount: true})
        );
    } else {
      this.messageService.add({
        severity: 'warn',
        summary: 'Cannot add buddy',
        detail: 'Invalid parameter',
        life: 3000
      })
    }
  }


}
