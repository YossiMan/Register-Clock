import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { SupplierWhereUniqueInput } from "../supplier/SupplierWhereUniqueInput";

export type SupplyOrderWhereInput = {
  id?: StringFilter;
  productSerialNumber?: StringNullableFilter;
  status?: StringNullableFilter;
  supplierId?: SupplierWhereUniqueInput;
};
