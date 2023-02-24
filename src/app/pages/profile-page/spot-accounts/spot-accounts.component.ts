import {ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, ViewChild} from '@angular/core';
import {SpotAccount} from "../../../model/spot-account";
import {User} from "../../../model/user";
import {SpotAccountService} from "../../../services/spot-account.service";
import {Table} from 'primeng/table';

@Component({
  selector: 'app-spot-accounts',
  templateUrl: './spot-accounts.component.html',
  styleUrls: ['./spot-accounts.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpotAccountsComponent implements OnInit, OnChanges {
  @Input() currentUser!: User;
  @ViewChild(Table) dt!: Table;

  public spotAccounts!: SpotAccount[]

  constructor(private spotAccountService: SpotAccountService) {
  }

  refresh() {
    this.dt.reset(); // property "reset" does not exist on type "TableModule"
  }

  //Observable<Array<SpotAccount>>
  ngOnInit() {
    this.spotAccounts = this.currentUser.spotAccounts;
    //this.currentUser.spotAccounts = this.spotAccounts;
    //this.spotAccountService.getSpotAccountData().subscribe((data) => {
    //  this.spotAccounts = data
    //});
  }


  onAddSpotAccount() {
    this.spotAccountService.createSpotAccount("EUR", 24099);
    this.spotAccounts = this.currentUser.spotAccounts;
    this.refresh();
  }


  ngOnChanges() {

  }

  onCreditFunds() {
  }

  onWithDrawFunds() {

  }
}
