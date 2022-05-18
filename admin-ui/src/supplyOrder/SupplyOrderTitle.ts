import { SupplyOrder as TSupplyOrder } from "../api/supplyOrder/SupplyOrder";

export const SUPPLYORDER_TITLE_FIELD = "productSerialNumber";

export const SupplyOrderTitle = (record: TSupplyOrder): string => {
  return record.productSerialNumber || record.id;
};
