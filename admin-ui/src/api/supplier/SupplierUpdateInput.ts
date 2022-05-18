import { SupplyOrderUpdateManyWithoutSuppliersInput } from "./SupplyOrderUpdateManyWithoutSuppliersInput";

export type SupplierUpdateInput = {
  supplierName?: string | null;
  supplyOrders?: SupplyOrderUpdateManyWithoutSuppliersInput;
};
