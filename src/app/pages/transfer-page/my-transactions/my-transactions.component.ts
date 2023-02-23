import {Component, Input} from '@angular/core';
import {Transaction} from "../../../model/transaction";
import {User} from "../../../model/user";

@Component({
  selector: 'app-my-transactions',
  templateUrl: './my-transactions.component.html',
  styleUrls: ['./my-transactions.component.css']
})
export class MyTransactionsComponent {
  @Input() currentUser!: User;
  transactions!: Transaction[];

}
