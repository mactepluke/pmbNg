import {Component, OnInit} from '@angular/core';
import {SessionService} from "../../../core/services/session.service";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {Operation} from "../../../models/operation";
import {OperationService} from "../../services/operation.service";

@Component({
  selector: 'app-operations-history-page',
  templateUrl: './operations-history-page.component.html',
  styleUrls: ['./operations-history-page.component.css']
})
export class OperationsHistoryPageComponent implements OnInit {

  operations$!: Observable<Operation[]>;

  constructor(private router: Router,
              private sessionService: SessionService,
              private operationService: OperationService) {
  }


  ngOnInit(): void {

    if (!this.sessionService.isLoggedIn) {
      this.router.navigateByUrl('paymybuddy/login');
    } else {
      this.operations$ = this.operationService.findOperations(this.sessionService.currentUser.email);

    }

  }

  onBackToProfile() {
    this.router.navigateByUrl('paymybuddy/pmb/profile');
  }
}
