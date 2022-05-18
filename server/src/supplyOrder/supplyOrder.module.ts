import { Module } from "@nestjs/common";
import { SupplyOrderModuleBase } from "./base/supplyOrder.module.base";
import { SupplyOrderService } from "./supplyOrder.service";
import { SupplyOrderController } from "./supplyOrder.controller";
import { SupplyOrderResolver } from "./supplyOrder.resolver";

@Module({
  imports: [SupplyOrderModuleBase],
  controllers: [SupplyOrderController],
  providers: [SupplyOrderService, SupplyOrderResolver],
  exports: [SupplyOrderService],
})
export class SupplyOrderModule {}
