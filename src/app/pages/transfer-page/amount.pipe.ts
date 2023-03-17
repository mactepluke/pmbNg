import { Pipe, PipeTransform } from '@angular/core';
import {SessionService} from "../../services/session.service";

@Pipe({
  name: 'amount'
})
export class AmountPipe implements PipeTransform {

  transform(email: string, amount: number): string {
    return email === SessionService.currentUser.email ? '+ ' + amount.toString() : '- ' + amount.toString();
  }
}
