import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Contact} from "../contact";

@Injectable({
  providedIn: 'root'
})
export class AddContactService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  addContact(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(`${this.apiUrl}/addContact`, contact);
  }
}
