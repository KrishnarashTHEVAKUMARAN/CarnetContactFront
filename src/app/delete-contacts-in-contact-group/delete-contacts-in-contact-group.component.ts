import { Component } from '@angular/core';
import {ContactGroup} from "../contact-group";
import {ActivatedRoute, Router} from "@angular/router";
import {DeleteContactService} from "./delete-contact.service";

@Component({
  selector: 'app-delete-contacts-in-contact-group',
  templateUrl: './delete-contacts-in-contact-group.component.html',
  styleUrls: ['./delete-contacts-in-contact-group.component.css']
})
export class DeleteContactsInContactGroupComponent {
  contacts!: any[];
  contactGroup! : ContactGroup;

  constructor(private addContactService: DeleteContactService, private route: ActivatedRoute, private router : Router) {}

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
    const contactGroupId = this.route.snapshot.paramMap.get('id');
    if (contactGroupId) {
      this.addContactService.getContactsInContactGroup(+contactGroupId).subscribe((data) => {
        this.contacts = data;
      });
    }
  }

  OnDeleteButtonClick(contactGroupId: number,contactId: number) : void{
    this.addContactService.deleteContact(contactGroupId,contactId).subscribe((message?: any) => {
      alert('Contact supprimé avec succès');
      this.router.navigate(['/ContactGroup']);
    });
  }


}
