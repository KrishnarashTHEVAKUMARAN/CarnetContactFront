import { TestBed } from '@angular/core/testing';

import { ModifyContactService } from './modify-contact.service';

describe('ModifyContactService', () => {
  let service: ModifyContactService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModifyContactService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
