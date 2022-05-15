import { SortOrder } from "../../util/SortOrder";

export type CustomerOrderByInput = {
  createdAt?: SortOrder;
  customerName?: SortOrder;
  eMail?: SortOrder;
  id?: SortOrder;
  isBlocked?: SortOrder;
  updatedAt?: SortOrder;
};
