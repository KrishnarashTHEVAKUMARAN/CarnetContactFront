import { Component, OnInit } from '@angular/core';
import { Contact } from "../contact";
import { ModifyContactService } from "./modify-contact.service";
import { Router, ActivatedRoute } from "@angular/router";
import {PhoneNumber} from "../phone-number";

@Component({
  selector: 'app-modify-contacts',
  templateUrl: './modify-contacts.component.html',
  styleUrls: ['./modify-contacts.component.css']
})
export class ModifyContactsComponent implements OnInit {
  existingContact: Contact = new Contact();

  constructor(private contactService: ModifyContactService, private router: Router, private route: ActivatedRoute) {
    this.initializePhones();
  }

  ngOnInit() {
    const contactId = this.route.snapshot.paramMap.get('id');
    if (contactId) {
      this.contactService.getContactById(+contactId).subscribe(contact => {
        this.existingContact = contact;
        if (!this.existingContact.phones || this.existingContact.phones.length === 0) {
          this.initializePhones();
        }
      });
    }
  }

  initializePhones() {
    this.existingContact.phones = [
      { phoneKind: '', phoneNumber: '' },
      { phoneKind: '', phoneNumber: '' }
    ];
  }

  onSubmit() {
    // Nous n'avons plus besoin de filtrer les phones car nous voulons les envoyer même s'ils sont vides.
    const { id, ...contactData } = this.existingContact;

    this.contactService.updateContact(id, contactData).subscribe(
      (updatedContact) => {
        console.log('Contact modifié avec succès', updatedContact);
        this.router.navigate(['/Contacts']);
      },
      (error) => {
        console.error('Erreur lors de la modification du contact:', error.message || error);
        console.log('Structure de données envoyée:', JSON.stringify(contactData, null, 2));
      }
    );
  }
}
