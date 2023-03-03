import {Component, Input} from '@angular/core';
import {User} from "../../../model/user";
import {Observable} from "rxjs";

@Component({
  selector: 'app-send-money',
  templateUrl: './send-money.component.html',
  styleUrls: ['./send-money.component.css']
})
export class SendMoneyComponent {
  @Input() currentUser!: User;
  buddies = ['Pierre','Paul','Jacques'];
}
