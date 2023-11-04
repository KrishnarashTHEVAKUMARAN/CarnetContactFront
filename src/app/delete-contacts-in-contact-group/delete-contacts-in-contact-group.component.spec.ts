import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteContactsInContactGroupComponent } from './delete-contacts-in-contact-group.component';

describe('DeleteContactsInContactGroupComponent', () => {
  let component: DeleteContactsInContactGroupComponent;
  let fixture: ComponentFixture<DeleteContactsInContactGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteContactsInContactGroupComponent]
    });
    fixture = TestBed.createComponent(DeleteContactsInContactGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
