import { Customer } from "../customer/Customer";

export type Address = {
  address_1: string | null;
  address_2: string | null;
  city: string | null;
  createdAt: Date;
  customers?: Customer | null;
  id: string;
  state: string | null;
  updatedAt: Date;
  zip: number | null;
};
