import { Component } from '@angular/core';
import {User} from "../../model/user";
import {SessionService} from "../../services/session.service";

@Component({
  selector: 'app-transfer-page',
  templateUrl: './transfer-page.component.html',
  styleUrls: ['./transfer-page.component.css']
})
export class TransferPageComponent {

  constructor(private sessionService: SessionService) {
  }

  get currentUser(): User {
    //return SessionService.currentUser;
    return this.sessionService.getCurrentUser();
  }
}
