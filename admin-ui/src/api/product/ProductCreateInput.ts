import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type ProductCreateInput = {
  order?: OrderWhereUniqueInput | null;
  productName?: string | null;
  serialNumber?: string | null;
};
