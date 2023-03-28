import { Pipe, PipeTransform } from '@angular/core';
import {AuthService} from "../../core/services/auth.service";

@Pipe({
  name: 'amount'
})
export class AmountPipe implements PipeTransform {

  constructor(private authService: AuthService) {
  }

  transform(amount: string | null, param: string): string {

    let credit = '+' + amount;
    let debit = '-' + amount;
    let result: string;

    if (param === this.authService.currentUser.email || param === 'Credit') {
      result = credit;
    } else {
      result = debit;
    }

    return result;
  }
}
