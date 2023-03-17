import { Pipe, PipeTransform } from '@angular/core';
import {SessionService} from "../../services/session.service";

@Pipe({
  name: 'transaction'
})
export class TransactionPipe implements PipeTransform {

  transform(recipientEmail: string, emitterEmail: string): string {
    return recipientEmail === SessionService.currentUser.email ? 'Received from ' + emitterEmail : 'Sent to ' + recipientEmail;
  }
}
