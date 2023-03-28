import {Component, OnInit} from '@angular/core';
import {User} from "../../models/user";
import {AuthService} from "../../../core/services/auth.service";
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

  constructor(private authService: AuthService, private router: Router, private userService: UserService) {
  }

  ngOnInit(): void {
      this.currentUser$ = this.userService.findUser(this.authService.currentUser.email);
  }
}
