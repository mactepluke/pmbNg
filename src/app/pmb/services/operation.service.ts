import { Injectable } from '@angular/core';
import {User} from "../models/user";
import {SpotAccount} from "../models/spot-account";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Operation} from "../models/operation";

@Injectable()
export class OperationService {

  constructor(private http: HttpClient) { }

  creditSpotAccount(user: User, spotAccount: SpotAccount, iban: string, amount: number): Observable<Operation> {
    return this.http.post<Operation>(`http://localhost:8080/operation/credit?email=${user.email}&iban=${iban}&amount=${amount}`,{
      "currency": `${spotAccount.currency}`
    });
  }

  withdrawFunds(user: User, spotAccount: SpotAccount, iban: string, amount: number): Observable<Operation> {
    return this.http.post<Operation>(`http://localhost:8080/operation/withdraw?email=${user.email}&iban=${iban}&amount=${amount}`,{
      "currency": `${spotAccount.currency}`
    });
  }

  findOperations(email: string): Observable<Operation[]> {
    return this.http.get<Operation[]>(`http://localhost:8080/operation/findAll/${email}`);
  }
}
