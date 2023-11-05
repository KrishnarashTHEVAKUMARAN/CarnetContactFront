import {Component, OnInit} from '@angular/core';
import { Contact } from './../contact';
import { ContactService } from './contact.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-get-contacts',
  templateUrl: './get-contacts.component.html',
  styleUrls: ['./get-contacts.component.css']
})
export class GetContactsComponent implements OnInit{
  contacts!: any[];

  constructor(private contactService: ContactService, private router : Router) {}

  ngOnInit(): void {
    this.loadContacts();
  }

  loadContacts(): void {
    this.contactService.getContacts().subscribe((data) => {
      this.contacts = data;
    });
  }

  OnCreateButtonClick() : void{
    this.router.navigate(['/AddContacts'])
  }

  OnGetContactGroup() : void{
    this.router.navigate(['/ContactGroup'])
  }

  OnModifyButtonClick(contactId: number) : void{
    this.router.navigate(['/ModifyContacts',contactId])
  }

  OnDeleteButtonClick(contactId: number): void {
    this.contactService.deleteContact(contactId).subscribe(() => {
      console.log('Contact supprimé avec succès, le contact n°',contactId);
      alert('Contact supprimé avec succès');
      this.loadContacts();  // recharger la liste après la suppression
    });
  }

}
