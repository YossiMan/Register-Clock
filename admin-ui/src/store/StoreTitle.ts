import { Store as TStore } from "../api/store/Store";

export const STORE_TITLE_FIELD = "productName";

export const StoreTitle = (record: TStore): string => {
  return record.productName || record.id;
};
