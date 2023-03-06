import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {User} from "../model/user";
import {SessionService} from "../services/session.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
  @Input() activePageName = '';
  currentUser$!: Observable<User>;

  constructor(private router: Router, private sessionService: SessionService) {

  }

 onReturnHome() {
    this.router.navigateByUrl('paymybuddy');
  }

}
