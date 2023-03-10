import { Injectable } from '@angular/core';
import {User} from "../model/user";
import {Observable} from "rxjs";
import {SpotAccount} from "../model/spot-account";
import {HttpClient} from "@angular/common/http";
import {BankAccount} from "../model/bank-account";

@Injectable({
  providedIn: 'root'
})
export class BankAccountService {

  constructor(private http: HttpClient) { }

  createBankAccount(user: User, name: string, iban: string): Observable<BankAccount> {
    return this.http.post<BankAccount>(`http://localhost:8080/bankaccount/create?email=${user.email}&name=${name}&iban=${iban}`, '');
  }

  findBankAccounts(email: string): Observable<BankAccount[]> {
    return this.http.get<BankAccount[]>(`http://localhost:8080/bankaccount/findAll/${email}`);
  }
}
