import {Component, Input, OnInit, Output} from '@angular/core';
import {SessionService} from "../../services/session.service";
import {User} from "../../model/user";
import {Observable, Subject} from "rxjs";


@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.css']
})
export class AccountPageComponent implements OnInit {

  currentUser$!: Observable<User>;

  constructor() {
  }
//TODO revoir la navigation au complet pour se rapprocher des wireframes et éviter de faire des requêtes get inutiles
  ngOnInit(): void {
    this.currentUser$ = SessionService.currentUser$;
  }

}
