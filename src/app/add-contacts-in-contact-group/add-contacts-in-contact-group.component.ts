import { Component } from '@angular/core';
import {ContactGroup} from "../contact-group";
import {AddContactService} from "./add-contact.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-add-contacts-in-contact-group',
  templateUrl: './add-contacts-in-contact-group.component.html',
  styleUrls: ['./add-contacts-in-contact-group.component.css']
})
export class AddContactsInContactGroupComponent {
  contacts!: any[];
  contactGroup! : ContactGroup;

  constructor(private addContactService: AddContactService, private route: ActivatedRoute, private router : Router) {}

  ngOnInit(): void {
    this.loadContactGroup();
    this.loadContacts();
  }

  loadContactGroup(): void {
    const contactGroupId = this.route.snapshot.paramMap.get('id');
    if (contactGroupId) {
      this.addContactService.getContactsGroupById(+contactGroupId).subscribe({
        next: (contact) => {
          this.contactGroup = contact;
        },
        error: (err) => {
          console.error('Erreur', err);
        }
      });
    }
  }

  loadContacts(): void {
    this.addContactService.getContacts().subscribe((data) => {
      this.contacts = data;
    });
  }

  OnAddButtonClick(contactGroupId: number,contactId: number) : void{
    this.addContactService.addContact(contactGroupId,contactId).subscribe((message?: any) => {
      alert('Contact ajoute avec succès');
      this.router.navigate(['/ContactGroup']);
    });
  }


}
