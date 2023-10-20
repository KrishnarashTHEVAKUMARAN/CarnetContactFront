import { Component } from '@angular/core';
import {ContactGroupService} from "./contact-group.service";
import {ContactGroup} from "../contact-group";
import {Router} from "@angular/router";

@Component({
  selector: 'app-get-contact-group',
  templateUrl: './get-contact-group.component.html',
  styleUrls: ['./get-contact-group.component.css']
})
export class GetContactGroupComponent {
  contactGroups: ContactGroup[] = [];
  newGroup: ContactGroup = new ContactGroup();

  constructor(private contactGroupService: ContactGroupService) {}

  ngOnInit(): void {
    this.fetchGroups();
  }

  fetchGroups(): void {
    this.contactGroupService.getGroups().subscribe(groups => {
      this.contactGroups = groups;
    });
  }

  OnCreateButtonClick() : void {
    this.contactGroupService.addContactGroup(this.newGroup).subscribe(
      (addedContact) => {
        console.log('Contact ajouté avec succès', addedContact);
        this.fetchGroups();
      },
      (error) => {
        console.error('Erreur lors de l\'ajout du contact', error);
      }
    );
  }


}
