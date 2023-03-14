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
    return this.http.post<SpotAccount>(`http://localhost:8080/spotaccount/create?email=${user.email}&currency=${currency}`, '');
  }

  findSpotAccounts(user: User): Observable<SpotAccount[]> {
    return this.http.get<SpotAccount[]>(`http://localhost:8080/spotaccount/findAll/${user.email}`);
  }

  deleteSpotAccount(user: User, currency: string): Observable<SpotAccount>  {
    return this.http.delete<SpotAccount>(`http://localhost:8080/spotaccount/delete?email=${user.email}&currency=${currency}`);
  }

}
