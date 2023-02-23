import {Component} from '@angular/core';
import {User} from "../../model/user";
import {Session} from "../../session";

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})

export class ProfilePageComponent {

  get currentUser(): User {
    return Session.currentUser;
  }

}
