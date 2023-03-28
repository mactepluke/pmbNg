import { Injectable } from '@angular/core';
import {SpotAccount} from "../../models/spot-account";
import {Observable} from "rxjs";
import {User} from "../../models/user";
import {HttpClient} from "@angular/common/http";

@Injectable()
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

}
