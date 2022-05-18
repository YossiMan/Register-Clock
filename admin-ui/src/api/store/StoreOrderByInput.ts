import { SortOrder } from "../../util/SortOrder";

export type StoreOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  productName?: SortOrder;
  productSerialNumber?: SortOrder;
  quantity?: SortOrder;
  updatedAt?: SortOrder;
};
