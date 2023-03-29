import { Injectable } from '@angular/core';
import {User} from "../models/user";
import {SpotAccount} from "../models/spot-account";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Operation} from "../models/operation";
import {environment} from "../../../environments/environment";

@Injectable()
export class OperationService {

  constructor(private http: HttpClient) { }

  creditSpotAccount(user: User, spotAccount: SpotAccount, iban: string, amount: number): Observable<Operation> {
    return this.http.post<Operation>(`${environment.apiUrl}/operation/credit?email=${user.email}&iban=${iban}&amount=${amount}`,{
      "currency": `${spotAccount.currency}`
    });
  }

  withdrawFunds(user: User, spotAccount: SpotAccount, iban: string, amount: number): Observable<Operation> {
    return this.http.post<Operation>(`${environment.apiUrl}/operation/withdraw?email=${user.email}&iban=${iban}&amount=${amount}`,{
      "currency": `${spotAccount.currency}`
    });
  }

  findOperations(email: string): Observable<Operation[]> {
    return this.http.get<Operation[]>(`${environment.apiUrl}/operation/findAll/${email}`);
  }
}
