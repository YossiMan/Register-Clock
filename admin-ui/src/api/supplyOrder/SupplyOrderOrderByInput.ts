import { SortOrder } from "../../util/SortOrder";

export type SupplyOrderOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  productSerialNumber?: SortOrder;
  status?: SortOrder;
  supplierIdId?: SortOrder;
  updatedAt?: SortOrder;
};
