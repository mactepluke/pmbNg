import {Component} from '@angular/core';
import {User} from "../../model/user";
import {SessionService} from "../../services/session.service";

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})

export class ProfilePageComponent {

  constructor(private sessionService: SessionService) {

  }

  get currentUser(): User {
    return this.sessionService.getCurrentUser();
  }

}
