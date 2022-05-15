import { Order } from "../order/Order";

export type Customer = {
  createdAt: Date;
  customerName: string;
  eMail: string | null;
  id: string;
  isBlocked: boolean | null;
  orders?: Array<Order>;
  updatedAt: Date;
};
