import {Component, Input} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {SessionService} from "../../../services/session.service";
import {Router} from "@angular/router";
import {User} from "../../../model/user";
import {Observable} from "rxjs";


@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {
  @Input() currentUser$!: Observable<User>;

  constructor(private sessionService: SessionService, private formBuilder: FormBuilder, private router: Router) {
  }

  onLogout() {
    this.sessionService.logOut();
    this.router.navigateByUrl('paymybuddy');
  }

}
