import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddContactsInContactGroupComponent } from './add-contacts-in-contact-group.component';

describe('AddContactsInContactGroupComponent', () => {
  let component: AddContactsInContactGroupComponent;
  let fixture: ComponentFixture<AddContactsInContactGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddContactsInContactGroupComponent]
    });
    fixture = TestBed.createComponent(AddContactsInContactGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
