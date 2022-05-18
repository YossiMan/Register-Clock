import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type StorageUpdateInput = {
  order?: OrderWhereUniqueInput | null;
  productName?: string | null;
  productSerialNum?: number | null;
};
