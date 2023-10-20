
import {PhoneNumber} from "./phone-number";
import {ContactGroup} from "./contact-group";
import {address} from "./address";

export class Contact {
  id!: number;
  firstName!: string;
  lastName!: string;
  email!: string;
  address: address = new address();
  phones: ({ phoneNumber: string; phoneKind: string } | { phoneNumber: string; phoneKind: string })[] = [new PhoneNumber(), new PhoneNumber()];
  contactGroups: ContactGroup[] = [];
}


