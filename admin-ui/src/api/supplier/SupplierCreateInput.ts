import { SupplyOrderCreateNestedManyWithoutSuppliersInput } from "./SupplyOrderCreateNestedManyWithoutSuppliersInput";

export type SupplierCreateInput = {
  supplierName?: string | null;
  supplyOrders?: SupplyOrderCreateNestedManyWithoutSuppliersInput;
};
