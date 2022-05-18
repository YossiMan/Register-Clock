import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type StorageCreateInput = {
  order?: OrderWhereUniqueInput | null;
  productName?: string | null;
  productSerialNum?: number | null;
};
