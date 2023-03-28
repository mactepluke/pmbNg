import { Pipe, PipeTransform } from '@angular/core';
import {AuthService} from "../../core/services/auth.service";

@Pipe({
  name: 'fee'
})
export class FeePipe implements PipeTransform {

  constructor(private authService: AuthService) {
  }

  transform(fee: string | null, recipientEmail: string): string {
    return recipientEmail === this.authService.currentUser.email ? '-' : '' + fee;
  }

}
