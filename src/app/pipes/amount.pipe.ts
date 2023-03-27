import { Pipe, PipeTransform } from '@angular/core';
import {SessionService} from "../services/session.service";

@Pipe({
  name: 'amount'
})
export class AmountPipe implements PipeTransform {

  constructor(private sessionService: SessionService) {
  }

  transform(amount: string | null, param: string): string {

    let credit = '+' + amount;
    let debit = '-' + amount;
    let result: string;

    if (param === this.sessionService.currentUser.email || param === 'Credit') {
      result = credit;
    } else {
      result = debit;
    }

    return result;
  }
}
