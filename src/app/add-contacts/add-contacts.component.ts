import { Component } from '@angular/core';
import { Contact } from "../contact";
import { PhoneNumber } from "../phone-number";
import { address } from "../address";
import {AddContactService} from "./add-contact.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-contacts',
  templateUrl: './add-contacts.component.html',
  styleUrls: ['./add-contacts.component.css']
})
export class AddContactsComponent {
  newContact: Contact = new Contact();

  constructor(private contactService: AddContactService, private router: Router) {
    this.newContact.phones.push(<PhoneNumber>{ phoneKind: '', phoneNumber: '' });
  }

  onSubmit() {
    this.newContact.phones = this.newContact.phones.filter(phone => phone.phoneNumber && phone.phoneKind);
    this.contactService.addContact(this.newContact).subscribe(
      (addedContact) => {
        console.log('Contact ajouté avec succès', addedContact);
        this.router.navigate(['/Contacts']);
      },
      (error) => {
        console.error('Erreur lors de l\'ajout du contact', error);
      }
    );
  }

}
