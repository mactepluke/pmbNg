import {Injectable} from '@angular/core';
import {User} from "../../pmb/models/user";
import {Recipient} from "../../pmb/models/recipient";
import {SpotAccount} from "../../pmb/models/spot-account";
import {BankAccount} from "../../pmb/models/bank-account";
import {Payment} from "../../pmb/models/Payment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable()
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
    return this.http.post<User>('http://localhost:8080/pmbuser/create', {
      "email": `${this.user.email}`,
      "password": `${this.user.password}`
    });
  }

  findUser(email: string): Observable<User> {
    return this.http.get<User>(`${environment.apiUrl}/pmbuser/find/${email}`);
  }

  loginUser(email: string, password: string): Observable<User> {
    return this.http.get<User>(`${environment.apiUrl}/pmbuser/login?email=${email}&password=${password}`);
  }

  updateUser(email: string, updatedUser: User): Observable<User> {
    return this.http.put<User>(`${environment.apiUrl}/pmbuser/update?email=${email}`,
      {
        "email": `${updatedUser.email}`,
        "password": `${updatedUser.password}`,
        "firstName": `${updatedUser.firstName}`,
        "lastName": `${updatedUser.lastName}`
      });
  }
}
