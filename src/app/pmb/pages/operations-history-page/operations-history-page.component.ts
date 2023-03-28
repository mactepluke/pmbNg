import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../core/services/auth.service";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {Operation} from "../../models/operation";
import {OperationService} from "../../services/operation.service";

@Component({
  selector: 'app-operations-history-page',
  templateUrl: './operations-history-page.component.html',
  styleUrls: ['./operations-history-page.component.css']
})
export class OperationsHistoryPageComponent implements OnInit {

  operations$!: Observable<Operation[]>;

  constructor(private router: Router,
              private authService: AuthService,
              private operationService: OperationService) {
  }


  ngOnInit(): void {
    this.operations$ = this.operationService.findOperations(this.authService.currentUser.email);
  }

  onBackToProfile() {
    this.router.navigateByUrl('paymybuddy/pmb/profile');
  }
}
