import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SupplyOrderService } from "./supplyOrder.service";
import { SupplyOrderControllerBase } from "./base/supplyOrder.controller.base";

@swagger.ApiTags("supplyOrders")
@common.Controller("supplyOrders")
export class SupplyOrderController extends SupplyOrderControllerBase {
  constructor(
    protected readonly service: SupplyOrderService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
