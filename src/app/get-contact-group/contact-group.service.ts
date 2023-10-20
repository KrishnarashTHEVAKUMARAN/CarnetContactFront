import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ContactGroup} from "../contact-group";

@Injectable({
  providedIn: 'root'
})
export class ContactGroupService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  addContactGroup(contactGroup: ContactGroup): Observable<ContactGroup> {
    return this.http.post<ContactGroup>(`${this.apiUrl}/addContactGroup`, contactGroup);
  }

  getGroups(): Observable<any[]> {
    const url = `${this.apiUrl}/contactsGroups`;
    return this.http.get<any[]>(url);
  }
}
