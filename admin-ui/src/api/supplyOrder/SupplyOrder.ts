import { Supplier } from "../supplier/Supplier";

export type SupplyOrder = {
  createdAt: Date;
  id: string;
  productSerialNumber: string | null;
  status: string | null;
  supplierId?: Supplier | null;
  updatedAt: Date;
};
