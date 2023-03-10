import {Injectable, OnInit} from '@angular/core';
import {User} from "../model/user";
import {Recipient} from "../model/recipient";
import {SpotAccount} from "../model/spot-account";
import {BankAccount} from "../model/bank-account";
import {Payment} from "../model/Payment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user!: User;

  constructor(private http: HttpClient) {
  }

  createAccount(formValue: { email: string, password: string }): Observable<User> {
    this.user = {
      ...formValue,
      firstName: 'anonymous',
      lastName: 'anonymous',
      verified: false,
      recipients: new Array<Recipient>(),
      spotAccounts: new Array<SpotAccount>(),
      bankAccounts: new Array<BankAccount>(),
      transactions: new Array<Payment>()
    }
    return this.http.post<User>(`http://localhost:8080/pmbuser/create?email=${this.user.email}&password=${this.user.password}`, '');
  }

  findUser(email: string): Observable<User> {
    return this.http.get<User>(`http://localhost:8080/pmbuser/find/${email}`);
  }

  loginUser(email: string, password: string): Observable<User>  {
    return this.http.get<User>(`http://localhost:8080/pmbuser/login?email=${email}&password=${password}`);
  }

    updateUser(user: User, item: string): Observable<User> {
    return this.http.put<User>(`http://localhost:8080/pmbuser/update?email=${user.email}&item=${item}`, '');
  }

//TODO créer une requête getUser pour récupérer les infos d'un utilisateur donné quand on en a besoin hors log in, voir splitter créer des requêtes par champs spécifiques dans d'autres services ?

}
