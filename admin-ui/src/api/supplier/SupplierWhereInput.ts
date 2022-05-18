import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { SupplyOrderListRelationFilter } from "../supplyOrder/SupplyOrderListRelationFilter";

export type SupplierWhereInput = {
  id?: StringFilter;
  supplierName?: StringNullableFilter;
  supplyOrders?: SupplyOrderListRelationFilter;
};
