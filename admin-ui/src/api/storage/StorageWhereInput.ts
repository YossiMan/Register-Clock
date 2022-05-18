import { StringFilter } from "../../util/StringFilter";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type StorageWhereInput = {
  id?: StringFilter;
  order?: OrderWhereUniqueInput;
  productName?: StringNullableFilter;
  productSerialNum?: FloatNullableFilter;
};
