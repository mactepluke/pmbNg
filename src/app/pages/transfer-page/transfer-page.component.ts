import { Component } from '@angular/core';
import {User} from "../../model/user";
import {Session} from "../../session";

@Component({
  selector: 'app-transfer-page',
  templateUrl: './transfer-page.component.html',
  styleUrls: ['./transfer-page.component.css']
})
export class TransferPageComponent {

  get currentUser(): User {
    return Session.currentUser;
  }
}
