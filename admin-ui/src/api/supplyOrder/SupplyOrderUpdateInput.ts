import { SupplierWhereUniqueInput } from "../supplier/SupplierWhereUniqueInput";

export type SupplyOrderUpdateInput = {
  productSerialNumber?: string | null;
  status?: string | null;
  supplierId?: SupplierWhereUniqueInput | null;
};
