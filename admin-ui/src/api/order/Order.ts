import { Customer } from "../customer/Customer";
import { Storage } from "../storage/Storage";

export type Order = {
  createdAt: Date;
  customerId?: Array<Customer>;
  id: string;
  productSerialNumber?: Array<Storage>;
  updatedAt: Date;
};
