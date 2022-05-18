import { CustomerUpdateManyWithoutOrdersInput } from "./CustomerUpdateManyWithoutOrdersInput";
import { StorageUpdateManyWithoutOrdersInput } from "./StorageUpdateManyWithoutOrdersInput";

export type OrderUpdateInput = {
  customerId?: CustomerUpdateManyWithoutOrdersInput;
  productSerialNumber?: StorageUpdateManyWithoutOrdersInput;
};
