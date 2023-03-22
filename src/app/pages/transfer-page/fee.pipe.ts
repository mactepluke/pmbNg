import { Pipe, PipeTransform } from '@angular/core';
import {SessionService} from "../../services/session.service";

@Pipe({
  name: 'fee'
})
export class FeePipe implements PipeTransform {

  transform(fee: string | null, recipientEmail: string): string {
    return recipientEmail === SessionService.currentUser.email ? '-' : '' + fee;
  }

}
