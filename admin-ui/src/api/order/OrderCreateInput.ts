import { CustomerCreateNestedManyWithoutOrdersInput } from "./CustomerCreateNestedManyWithoutOrdersInput";
import { ProductCreateNestedManyWithoutOrdersInput } from "./ProductCreateNestedManyWithoutOrdersInput";

export type OrderCreateInput = {
  customerId?: CustomerCreateNestedManyWithoutOrdersInput;
  productId?: ProductCreateNestedManyWithoutOrdersInput;
};
