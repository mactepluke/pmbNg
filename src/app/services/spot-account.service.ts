import { Injectable } from '@angular/core';
import {SpotAccount} from "../model/spot-account";
import {Observable} from "rxjs";
import {User} from "../model/user";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SpotAccountService {

  constructor(private http: HttpClient) { }

  createSpotAccount(user: User, currency: string): Observable<SpotAccount> {
    //let newSpotAccount = new SpotAccount(currency);
    //user.spotAccounts.push(newSpotAccount);

    return this.http.post<SpotAccount>(`http://localhost:8080/spotaccount/create?email=${user.email}&currency=${currency}`, '');
  }

  findSpotAccounts(email: string): Observable<SpotAccount[]> {
    return this.http.get<SpotAccount[]>(`http://localhost:8080/spotaccount/findAll/${email}`);
  }

}
