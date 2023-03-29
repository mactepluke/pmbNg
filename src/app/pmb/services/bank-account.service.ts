import { Injectable } from '@angular/core';
import {User} from "../models/user";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {BankAccount} from "../models/bank-account";
import {environment} from "../../../environments/environment";

@Injectable()
export class BankAccountService {

  constructor(private http: HttpClient) { }

  createBankAccount(user: User, name: string, iban: string): Observable<BankAccount> {
    return this.http.post<BankAccount>(`${environment.apiUrl}/bankaccount/create?email=${user.email}&name=${name}&iban=${iban}`, '');
  }

  findBankAccounts(user: User): Observable<BankAccount[]> {
    return this.http.get<BankAccount[]>(`${environment.apiUrl}/bankaccount/findAll/${user.email}`);
  }

  deleteBankAccount(user: User, iban: string): Observable<BankAccount>  {
    return this.http.delete<BankAccount>(`${environment.apiUrl}/bankaccount/delete?email=${user.email}&iban=${iban}`);
  }
}
