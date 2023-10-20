import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetContactGroupComponent } from './get-contact-group.component';

describe('GetContactGroupComponent', () => {
  let component: GetContactGroupComponent;
  let fixture: ComponentFixture<GetContactGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetContactGroupComponent]
    });
    fixture = TestBed.createComponent(GetContactGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
