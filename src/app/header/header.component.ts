import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {User} from "../model/user";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
  @Input() activePageName = '';
  currentUser$!: Observable<User>;

  constructor(private router: Router) {

  }

 onReturnHome() {
    this.router.navigateByUrl('paymybuddy');
  }

}
