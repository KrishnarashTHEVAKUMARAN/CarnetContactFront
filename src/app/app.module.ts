import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { GetContactsComponent } from './get-contacts/get-contacts.component';
import { AddContactsComponent } from './add-contacts/add-contacts.component';
import { ModifyContactsComponent } from './modify-contacts/modify-contacts.component';
import { GetContactGroupComponent } from './get-contact-group/get-contact-group.component';
import { AddContactsInContactGroupComponent } from './add-contacts-in-contact-group/add-contacts-in-contact-group.component';
import { DeleteContactsInContactGroupComponent } from './delete-contacts-in-contact-group/delete-contacts-in-contact-group.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarformComponent } from './navbarform/navbarform.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GetContactsComponent,
    AddContactsComponent,
    ModifyContactsComponent,
    GetContactGroupComponent,
    AddContactsInContactGroupComponent,
    DeleteContactsInContactGroupComponent,
    NavbarComponent,
    NavbarformComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
