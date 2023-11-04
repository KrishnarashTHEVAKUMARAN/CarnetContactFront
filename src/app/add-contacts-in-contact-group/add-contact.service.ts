import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ContactGroup} from "../contact-group";
import {Contact} from "../contact";

@Injectable({
  providedIn: 'root'
})
export class AddContactService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  getContacts(): Observable<any[]> {
    const url = `${this.apiUrl}/contacts`;
    return this.http.get<any[]>(url);
  }

  getContactsGroup(): Observable<any[]> {
    const url = `${this.apiUrl}/contactsGroups`;
    return this.http.get<any[]>(url);
  }

  getContactsGroupById(id: number): Observable<ContactGroup> {
    return this.http.get<ContactGroup>(`${this.apiUrl}/contactGroupById/${id}`);
  }

  addContact(idContactGroup :number, idContact: number): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/addContactGroups/${idContactGroup}/${idContact}`, {});
  }

}
