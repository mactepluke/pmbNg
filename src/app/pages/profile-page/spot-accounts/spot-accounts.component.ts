import {ChangeDetectionStrategy, Component, Input, OnInit, ViewChild} from '@angular/core';
import {SpotAccount} from "../../../model/spot-account";
import {User} from "../../../model/user";
import {SpotAccountService} from "../../../services/spot-account.service";
import {Table} from 'primeng/table';
import {Observable} from "rxjs";

@Component({
  selector: 'app-spot-accounts',
  templateUrl: './spot-accounts.component.html',
  styleUrls: ['./spot-accounts.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpotAccountsComponent implements OnInit {

  @Input() currentUser!: User;
  @ViewChild(Table) dt!: Table;
  spotAccounts$!: Observable<SpotAccount[]>;

  constructor(private spotAccountService: SpotAccountService) {
  }

  ngOnInit(): void {
    this.spotAccounts$ = this.spotAccountService.findSpotAccounts(this.currentUser.email);
  }

  refresh() {
    this.dt.reset();
  }

  onAddSpotAccount() {

    this.spotAccountService.createSpotAccount(this.currentUser, "EUR").subscribe();
    this.spotAccounts$ = this.spotAccountService.findSpotAccounts(this.currentUser.email);

    this.refresh();
  }

  onCreditFunds() {
  }

  onWithDrawFunds() {
  }
}
