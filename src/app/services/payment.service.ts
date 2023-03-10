import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../model/user";
import {Observable} from "rxjs";
import {Payment} from "../model/Payment";

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http: HttpClient) {
  }

  createPayment(user: User, recipient: string, description: string, netAmount: number, currency: string): Observable<Payment> {
    return this.http.post<Payment>(`http://localhost:8080/payment/create?email=${user.email}&recipient=${recipient}&description=${description}&net_amount=${netAmount}&currency=${currency}`, '');
  }

  findPayments(email: string): Observable<Payment[]> {
    return this.http.get<Payment[]>(`http://localhost:8080/payment/findAll/${email}`);
  }

}
