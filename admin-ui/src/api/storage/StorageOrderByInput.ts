import { SortOrder } from "../../util/SortOrder";

export type StorageOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  orderId?: SortOrder;
  productName?: SortOrder;
  productSerialNum?: SortOrder;
  updatedAt?: SortOrder;
};
