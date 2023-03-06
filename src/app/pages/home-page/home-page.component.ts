import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {SessionService} from "../../services/session.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private router: Router) {
  }

  onLogin() {
    this.router.navigateByUrl('paymybuddy/login');
  }

  ngOnInit(): void {
    if (SessionService.isLoggedIn)  {
      this.router.navigateByUrl('paymybuddy/profile');
    }
  }
}
