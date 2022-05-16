import { OrderCreateNestedManyWithoutCustomersInput } from "./OrderCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  customerName: string;
  Email?: string | null;
  isBlocked?: boolean | null;
  orders?: OrderCreateNestedManyWithoutCustomersInput;
};
