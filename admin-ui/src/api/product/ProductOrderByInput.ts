import { SortOrder } from "../../util/SortOrder";

export type ProductOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  orderId?: SortOrder;
  productName?: SortOrder;
  serialNumber?: SortOrder;
  updatedAt?: SortOrder;
};
