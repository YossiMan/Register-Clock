import { StringFilter } from "../../util/StringFilter";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ProductWhereInput = {
  id?: StringFilter;
  order?: OrderWhereUniqueInput;
  productName?: StringNullableFilter;
  serialNumber?: StringNullableFilter;
};
