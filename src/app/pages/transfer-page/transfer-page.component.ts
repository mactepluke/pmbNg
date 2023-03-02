import {Component, OnInit} from '@angular/core';
import {User} from "../../model/user";
import {SessionService} from "../../services/session.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-transfer-page',
  templateUrl: './transfer-page.component.html',
  styleUrls: ['./transfer-page.component.css']
})
export class TransferPageComponent implements OnInit {

  constructor(private sessionService: SessionService, private router: Router) {
  }

  get currentUser(): User {
    //return SessionService.currentUser;
    return this.sessionService.getCurrentUser();
  }

  ngOnInit(): void {
    if (!this.sessionService.isLoggedIn()) {
      this.router.navigateByUrl('paymybuddy');
    }
  }
}
