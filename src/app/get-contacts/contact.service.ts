import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  getContacts(): Observable<any[]> {
    const url = `${this.apiUrl}/contacts`;
    return this.http.get<any[]>(url);
  }

  deleteContact(id: number): Observable<void> {
    const url = `${this.apiUrl}/deleteContact/${id}`;
    return this.http.delete<void>(url);
  }

}
