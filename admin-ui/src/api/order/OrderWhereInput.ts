import { CustomerListRelationFilter } from "../customer/CustomerListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProductListRelationFilter } from "../product/ProductListRelationFilter";

export type OrderWhereInput = {
  customerId?: CustomerListRelationFilter;
  id?: StringFilter;
  productId?: ProductListRelationFilter;
};
