import { Pipe, PipeTransform } from '@angular/core';
import {AuthService} from "../../core/services/auth.service";

@Pipe({
  name: 'transaction'
})
export class TransactionPipe implements PipeTransform {

  constructor(private authService: AuthService) {
  }

  transform(recipientEmail: string, emitterEmail: string): string {
    return recipientEmail === this.authService.currentUser.email ? 'Received from ' + emitterEmail : 'Sent to ' + recipientEmail;
  }
}
