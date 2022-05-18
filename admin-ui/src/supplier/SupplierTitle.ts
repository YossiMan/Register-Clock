import { Supplier as TSupplier } from "../api/supplier/Supplier";

export const SUPPLIER_TITLE_FIELD = "supplierName";

export const SupplierTitle = (record: TSupplier): string => {
  return record.supplierName || record.id;
};
