import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";

export type CustomerWhereInput = {
  customerName?: StringFilter;
  Email?: StringNullableFilter;
  id?: StringFilter;
  isBlocked?: BooleanNullableFilter;
  orders?: OrderListRelationFilter;
};
