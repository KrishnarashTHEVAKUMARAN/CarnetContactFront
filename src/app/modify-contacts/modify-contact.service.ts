import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from "../contact";

@Injectable({
  providedIn: 'root'
})
export class ModifyContactService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  getContactById(id: number): Observable<Contact> {
    return this.http.get<Contact>(`${this.apiUrl}/contactById/${id}`);
  }

  updateContact(id: number, contact: Pick<Contact, "firstName" | "lastName" | "email" | "address" | "phones" | "contactGroups">): Observable<Contact> {
    return this.http.put<Contact>(`${this.apiUrl}/updateContact/${id}`, contact);
  }
}
