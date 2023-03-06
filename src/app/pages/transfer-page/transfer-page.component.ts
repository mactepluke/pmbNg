import {Component, OnInit} from '@angular/core';
import {User} from "../../model/user";
import {SessionService} from "../../services/session.service";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-transfer-page',
  templateUrl: './transfer-page.component.html',
  styleUrls: ['./transfer-page.component.css']
})
export class TransferPageComponent implements OnInit {

  currentUser$!: Observable<User>;

  constructor(private router: Router, private userService: UserService) {
  }

  ngOnInit(): void {
    if (!SessionService.isLoggedIn) {
      this.router.navigateByUrl('paymybuddy/login');
    } else {
      this.currentUser$ = this.userService.findUser(SessionService.currentUser.email);
    }
  }
}
