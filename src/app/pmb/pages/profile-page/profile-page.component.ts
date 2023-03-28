import {Component, OnInit} from '@angular/core';
import {User} from "../../../core/models/user";
import {SessionService} from "../../../core/services/session.service";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {UserService} from "../../../core/services/user.service";

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})

export class ProfilePageComponent implements OnInit {
  currentUser$!: Observable<User>;

  constructor(private sessionService: SessionService, private router: Router, private userService: UserService) {
  }

  ngOnInit(): void {
    if (!this.sessionService.isLoggedIn) {
      this.router.navigateByUrl('paymybuddy/login');
    } else {
      this.currentUser$ = this.userService.findUser(this.sessionService.currentUser.email);
    }
  }
}
