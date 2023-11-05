import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ContactGroup} from "../contact-group";

@Injectable({
  providedIn: 'root'
})
export class DeleteContactService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  getContactsInContactGroup(id: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/contactGroup/${id}/contacts`);
  }

  getContactsGroupById(id: number): Observable<ContactGroup> {
    return this.http.get<ContactGroup>(`${this.apiUrl}/contactGroupById/${id}`);
  }

  deleteContact(idContactGroup :number, idContact: number): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/deleteContactGroups/${idContactGroup}/${idContact}`,{});
  }

}
