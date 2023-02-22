import { Component } from '@angular/core';
import {Transaction} from "../model/transaction";

@Component({
  selector: 'app-my-transactions',
  templateUrl: './my-transactions.component.html',
  styleUrls: ['./my-transactions.component.css']
})
export class MyTransactionsComponent {
  transactions!: Transaction[];

}
