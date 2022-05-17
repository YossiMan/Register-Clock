import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type ProductUpdateInput = {
  order?: OrderWhereUniqueInput | null;
  productName?: string | null;
  serialNumber?: number | null;
};
