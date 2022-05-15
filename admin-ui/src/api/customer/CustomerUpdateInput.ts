import { OrderUpdateManyWithoutCustomersInput } from "./OrderUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  customerName?: string;
  eMail?: string | null;
  isBlocked?: boolean | null;
  orders?: OrderUpdateManyWithoutCustomersInput;
};
