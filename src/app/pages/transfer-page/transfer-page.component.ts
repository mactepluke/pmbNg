import {Component, OnInit} from '@angular/core';
import {User} from "../../model/user";
import {SessionService} from "../../services/session.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-transfer-page',
  templateUrl: './transfer-page.component.html',
  styleUrls: ['./transfer-page.component.css']
})
export class TransferPageComponent implements OnInit {

  currentUser$!: Observable<User>;

  constructor() {
  }

  ngOnInit(): void {
    this.currentUser$ = SessionService.currentUser$;
  }
}
