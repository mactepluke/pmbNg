import {Component, Input} from '@angular/core';
import {SpotAccount} from "../../../model/spot-account";
import {User} from "../../../model/user";

@Component({
  selector: 'app-spot-accounts',
  templateUrl: './spot-accounts.component.html',
  styleUrls: ['./spot-accounts.component.css']
})
export class SpotAccountsComponent {
  @Input() currentUser!: User;
  spotAccounts!: SpotAccount[];
}
