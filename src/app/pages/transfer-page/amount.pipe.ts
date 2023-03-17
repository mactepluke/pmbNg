import { Pipe, PipeTransform } from '@angular/core';
import {SessionService} from "../../services/session.service";

@Pipe({
  name: 'amount'
})
export class AmountPipe implements PipeTransform {

  transform(amount: string | null, email: string): string {

    return email === SessionService.currentUser.email ? '+' + amount : '-' + amount;
  }
}
