import {Component, OnInit} from '@angular/core';
import {User} from "../../model/user";
import {SessionService} from "../../services/session.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})

export class ProfilePageComponent implements OnInit {

  currentUser$!: Observable<User>;

  constructor() {
  }

  ngOnInit(): void {
    this.currentUser$ = SessionService.currentUser$;
  }
}
