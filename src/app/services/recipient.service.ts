import { Injectable } from '@angular/core';
import {User} from "../model/user";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Recipient} from "../model/recipient";

@Injectable({
  providedIn: 'root'
})
export class RecipientService {

  constructor(private http: HttpClient) { }

  createRecipient(user: User, recipientEmail: string): Observable<Recipient> {
    return this.http.post<Recipient>(`http://localhost:8080/recipient/create?user=${user.email}&recipient=${recipientEmail}`, '');
  }

  findRecipients(email: string): Observable<Recipient[]> {
    return this.http.get<Recipient[]>(`http://localhost:8080/recipient/findAll/${email}`);
  }

}
