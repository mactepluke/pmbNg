import { Pipe, PipeTransform } from '@angular/core';
import {SessionService} from "../../core/services/session.service";

@Pipe({
  name: 'fee'
})
export class FeePipe implements PipeTransform {

  constructor(private sessionService: SessionService) {
  }

  transform(fee: string | null, recipientEmail: string): string {
    return recipientEmail === this.sessionService.currentUser.email ? '-' : '' + fee;
  }

}
