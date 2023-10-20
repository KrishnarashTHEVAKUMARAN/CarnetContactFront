import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {GetContactsComponent} from "./get-contacts/get-contacts.component";
import {ModifyContactsComponent} from "./modify-contacts/modify-contacts.component";
import {AddContactsComponent} from "./add-contacts/add-contacts.component";
import {GetContactGroupComponent} from "./get-contact-group/get-contact-group.component";

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'Contacts', component : GetContactsComponent},
  { path: 'AddContacts', component : AddContactsComponent},
  { path: 'ModifyContacts/:id', component : ModifyContactsComponent},
  { path: 'ContactGroup', component : GetContactGroupComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

