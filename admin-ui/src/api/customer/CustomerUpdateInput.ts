import { OrderUpdateManyWithoutCustomersInput } from "./OrderUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  customerName?: string;
  Email?: string | null;
  isBlocked?: boolean | null;
  orders?: OrderUpdateManyWithoutCustomersInput;
};
