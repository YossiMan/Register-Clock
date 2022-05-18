import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type StoreWhereInput = {
  id?: StringFilter;
  productName?: StringNullableFilter;
  productSerialNumber?: FloatNullableFilter;
  quantity?: IntNullableFilter;
};
