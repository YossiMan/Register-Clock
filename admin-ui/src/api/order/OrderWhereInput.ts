import { CustomerListRelationFilter } from "../customer/CustomerListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StorageListRelationFilter } from "../storage/StorageListRelationFilter";

export type OrderWhereInput = {
  customerId?: CustomerListRelationFilter;
  id?: StringFilter;
  productSerialNumber?: StorageListRelationFilter;
};
