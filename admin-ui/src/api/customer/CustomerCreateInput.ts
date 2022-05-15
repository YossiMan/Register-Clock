import { OrderCreateNestedManyWithoutCustomersInput } from "./OrderCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  customerName: string;
  eMail?: string | null;
  isBlocked?: boolean | null;
  orders?: OrderCreateNestedManyWithoutCustomersInput;
};
