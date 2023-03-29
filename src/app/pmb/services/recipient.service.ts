import { Injectable } from '@angular/core';
import {User} from "../models/user";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Recipient} from "../models/recipient";
import {environment} from "../../../environments/environment";

@Injectable()
export class RecipientService {

  constructor(private http: HttpClient) { }

  createRecipient(user: User, recipientEmail: string): Observable<Recipient> {
    return this.http.post<Recipient>(`${environment.apiUrl}/recipient/create?user=${user.email}&recipient=${recipientEmail}`, '');
  }

  findRecipients(user: User): Observable<User[]> {
    return this.http.get<User[]>(`${environment.apiUrl}/recipient/findAll/${user.email}`);
  }

  deleteRecipient(user: User, recipientEmail: string): Observable<Recipient>  {
    return this.http.delete<Recipient>(`${environment.apiUrl}/recipient/delete?email=${user.email}&recipient=${recipientEmail}`);
  }

}
