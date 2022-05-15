import { CustomerUpdateManyWithoutOrdersInput } from "./CustomerUpdateManyWithoutOrdersInput";
import { ProductUpdateManyWithoutOrdersInput } from "./ProductUpdateManyWithoutOrdersInput";

export type OrderUpdateInput = {
  customerId?: CustomerUpdateManyWithoutOrdersInput;
  productId?: ProductUpdateManyWithoutOrdersInput;
};
