import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {SessionService} from "../../services/session.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private router: Router,
              private sessionService: SessionService) {
  }

  onLogin() {
    this.router.navigateByUrl('paymybuddy/login');
  }

  ngOnInit(): void {
    if (this.sessionService.isLoggedIn)  {
      this.router.navigateByUrl('paymybuddy/pmb/profile');
    }
  }
}
