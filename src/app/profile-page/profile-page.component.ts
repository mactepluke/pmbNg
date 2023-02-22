import { Component } from '@angular/core';
import {BankAccount} from "../model/bank-account";
import {SpotAccount} from "../model/spot-account";

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent {
  bankAccounts!: BankAccount[];
  spotAccounts!: SpotAccount[];
}
