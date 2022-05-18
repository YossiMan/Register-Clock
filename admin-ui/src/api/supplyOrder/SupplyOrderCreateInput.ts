import { SupplierWhereUniqueInput } from "../supplier/SupplierWhereUniqueInput";

export type SupplyOrderCreateInput = {
  productSerialNumber?: string | null;
  status?: string | null;
  supplierId?: SupplierWhereUniqueInput | null;
};
