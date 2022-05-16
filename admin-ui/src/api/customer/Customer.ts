import { Order } from "../order/Order";

export type Customer = {
  createdAt: Date;
  customerName: string;
  Email: string | null;
  id: string;
  isBlocked: boolean | null;
  orders?: Array<Order>;
  updatedAt: Date;
};
