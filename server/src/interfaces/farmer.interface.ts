import { Address } from './address.interface';
import { Document } from './document.interface';

export interface Farmer {
  id: string;
  document: Document;
  name: string;
  address: Address;
}
