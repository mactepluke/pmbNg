import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../models/user";
import {Observable} from "rxjs";
import {Payment} from "../models/Payment";
import {environment} from "../../../environments/environment";

@Injectable()
export class PaymentService {

  constructor(private http: HttpClient) {
  }

  createPayment(user: User, recipient: string, description: string, netAmount: number, currency: string): Observable<Payment> {
    return this.http.post<Payment>(`${environment.apiUrl}/payment/create?user=${user.email}&recipient=${recipient}`,
      {"description":`${description}`, "netAmount":`${netAmount}`, "currency":`${currency}`});
  }

  findPayments(user: User): Observable<Payment[]> {
    return this.http.get<Payment[]>(`${environment.apiUrl}/payment/findAll/${user.email}`);
  }

}
