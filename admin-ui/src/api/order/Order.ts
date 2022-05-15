import { Customer } from "../customer/Customer";
import { Product } from "../product/Product";

export type Order = {
  createdAt: Date;
  customerId?: Array<Customer>;
  id: string;
  productId?: Array<Product>;
  updatedAt: Date;
};
