import {ChangeDetectionStrategy, Component, Input, OnInit, ViewChild} from '@angular/core';
import {SpotAccount} from "../../../model/spot-account";
import {User} from "../../../model/user";
import {SpotAccountService} from "../../../services/spot-account.service";
import {Table} from 'primeng/table';
import {Observable, share, switchMap} from "rxjs";

@Component({
  selector: 'app-spot-accounts',
  templateUrl: './spot-accounts.component.html',
  styleUrls: ['./spot-accounts.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpotAccountsComponent implements OnInit {

  @Input() currentUser!: User;
  spotAccounts$!: Observable<SpotAccount[]>;

  constructor(private spotAccountService: SpotAccountService) {
  }

  ngOnInit(): void {
    this.spotAccounts$ = this.spotAccountService.findSpotAccounts(this.currentUser.email);
  }
// TODO identifier pourquoi le subscribe ne fonctionne pas à la place du switchMap (on ne rafraichissait le table qu'un seul clic de bouton sur deux)
  onAddSpotAccount() {

    this.spotAccounts$ = this.spotAccountService.createSpotAccount(this.currentUser, "EUR")
      .pipe(switchMap(() => this.spotAccountService.findSpotAccounts(this.currentUser.email)));

/*    this.spotAccountService.createSpotAccount(this.currentUser, "EUR").subscribe(
      () => {
        this.spotAccounts$ = this.spotAccountService.findSpotAccounts(this.currentUser.email);
        this.spotAccounts$.subscribe();
      }
    );*/

  }

  onCreditFunds() {
  }

  onWithDrawFunds() {
  }
}
