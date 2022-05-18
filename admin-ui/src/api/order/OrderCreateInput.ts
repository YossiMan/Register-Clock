import { CustomerCreateNestedManyWithoutOrdersInput } from "./CustomerCreateNestedManyWithoutOrdersInput";
import { StorageCreateNestedManyWithoutOrdersInput } from "./StorageCreateNestedManyWithoutOrdersInput";

export type OrderCreateInput = {
  customerId?: CustomerCreateNestedManyWithoutOrdersInput;
  productSerialNumber?: StorageCreateNestedManyWithoutOrdersInput;
};
