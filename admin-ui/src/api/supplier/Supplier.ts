import { SupplyOrder } from "../supplyOrder/SupplyOrder";

export type Supplier = {
  createdAt: Date;
  id: string;
  supplierName: string | null;
  supplyOrders?: Array<SupplyOrder>;
  updatedAt: Date;
};
