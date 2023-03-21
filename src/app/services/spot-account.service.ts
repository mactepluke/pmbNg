import { Injectable } from '@angular/core';
import {SpotAccount} from "../model/spot-account";
import {Observable} from "rxjs";
import {User} from "../model/user";
import {HttpClient} from "@angular/common/http";
import {BankAccount} from "../model/bank-account";

@Injectable({
  providedIn: 'root'
})
export class SpotAccountService {

  constructor(private http: HttpClient) { }

  createSpotAccount(user: User, spotAccount: SpotAccount): Observable<SpotAccount> {
    return this.http.post<SpotAccount>(`http://localhost:8080/spotaccount/create?email=${user.email}&currency=${spotAccount.currency}`, '');
  }

  findSpotAccounts(user: User): Observable<SpotAccount[]> {
    return this.http.get<SpotAccount[]>(`http://localhost:8080/spotaccount/findAll/${user.email}`);
  }

  deleteSpotAccount(user: User, spotAccount: SpotAccount): Observable<SpotAccount>  {
      return this.http.delete<SpotAccount>(`http://localhost:8080/spotaccount/delete?email=${user.email}&currency=${spotAccount.currency}`);
  }

  creditSpotAccount(user: User, spotAccount: SpotAccount, bankAccount: BankAccount, amount: number): Observable<SpotAccount> {
    return this.http.put<SpotAccount>(`http://localhost:8080/spotaccount/credit?email=${user.email}`,{
      "spotAccount": `${spotAccount.currency}`,
      "bankAccount": `${bankAccount.iban}`,
      "amount": `${amount}`
    });
  }

  withdrawFunds(user: User, spotAccount: SpotAccount, bankAccount: BankAccount, amount: number): Observable<SpotAccount> {
    return this.http.put<SpotAccount>(`http://localhost:8080/spotaccount/withdraw?email=${user.email}`,{
      "spotAccount": `${spotAccount.currency}`,
      "bankAccount": `${bankAccount.iban}`,
      "amount": `${amount}`
    });
  }

}
