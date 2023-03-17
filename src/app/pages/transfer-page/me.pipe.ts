import { Pipe, PipeTransform } from '@angular/core';
import {SessionService} from "../../services/session.service";

@Pipe({
  name: 'me'
})
export class MePipe implements PipeTransform {

  transform(email: string): string {
    return email === SessionService.currentUser.email ? 'Myself' : email;
  }
}
