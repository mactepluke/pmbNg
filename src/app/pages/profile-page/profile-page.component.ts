import {Component, OnInit} from '@angular/core';
import {User} from "../../model/user";
import {SessionService} from "../../services/session.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})

export class ProfilePageComponent implements OnInit {

  constructor(private sessionService: SessionService, private router: Router) {
  }

  get currentUser(): User {
    return this.sessionService.getCurrentUser();
  }

  ngOnInit(): void {
    if (!this.sessionService.isLoggedIn()) {
      this.router.navigateByUrl('paymybuddy');
    }
  }
}
