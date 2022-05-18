import { Storage as TStorage } from "../api/storage/Storage";

export const STORAGE_TITLE_FIELD = "productName";

export const StorageTitle = (record: TStorage): string => {
  return record.productName || record.id;
};
