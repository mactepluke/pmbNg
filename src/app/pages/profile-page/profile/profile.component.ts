import {Component, Input} from '@angular/core';
import {User} from "../../../model/user";
import {SessionService} from "../../../services/session.service";
import {Router} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  @Input() currentUser!: User;

  constructor(private sessionService: SessionService, private router: Router) {
  }

  onLogout() {
    this.sessionService.logOut();
    this.router.navigateByUrl('paymybuddy');
  }

  onEditProfile() {

  }
}
