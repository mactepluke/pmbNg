import {Component, Input} from '@angular/core';
import {User} from "../../../model/user";
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  @Input() currentUser!: User;

  constructor(private userService: UserService) {
  }

  onLogout() {
    this.userService.logOut();
  }
}
