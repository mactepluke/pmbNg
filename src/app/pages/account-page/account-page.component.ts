import {Component, OnInit} from '@angular/core';
import {SessionService} from "../../services/session.service";
import {User} from "../../model/user";


@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.css']
})
export class AccountPageComponent implements OnInit {

  protected isDisplayed!: boolean;

  constructor(private sessionService: SessionService) {
  }

  ngOnInit(): void {
    this.isDisplayed = !this.sessionService.isLoggedIn();
  }

  get currentUser(): User {
    return this.sessionService.getCurrentUser();
  }

}
