import { Order } from "../order/Order";

export type Storage = {
  createdAt: Date;
  id: string;
  order?: Order | null;
  productName: string | null;
  productSerialNum: number | null;
  updatedAt: Date;
};
