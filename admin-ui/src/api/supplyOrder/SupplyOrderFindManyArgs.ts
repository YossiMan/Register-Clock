import { SupplyOrderWhereInput } from "./SupplyOrderWhereInput";
import { SupplyOrderOrderByInput } from "./SupplyOrderOrderByInput";

export type SupplyOrderFindManyArgs = {
  where?: SupplyOrderWhereInput;
  orderBy?: Array<SupplyOrderOrderByInput>;
  skip?: number;
  take?: number;
};
