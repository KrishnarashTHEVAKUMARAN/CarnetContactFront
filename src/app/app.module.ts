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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GetContactsComponent,
    AddContactsComponent,
    ModifyContactsComponent,
    GetContactGroupComponent,
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
