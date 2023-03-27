import { Pipe, PipeTransform } from '@angular/core';
import {SessionService} from "../../../core/services/session.service";

@Pipe({
  name: 'transaction'
})
export class TransactionPipe implements PipeTransform {

  constructor(private sessionService: SessionService) {
  }

  transform(recipientEmail: string, emitterEmail: string): string {
    return recipientEmail === this.sessionService.currentUser.email ? 'Received from ' + emitterEmail : 'Sent to ' + recipientEmail;
  }
}
