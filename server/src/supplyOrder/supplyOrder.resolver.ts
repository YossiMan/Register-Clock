import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { SupplyOrderResolverBase } from "./base/supplyOrder.resolver.base";
import { SupplyOrder } from "./base/SupplyOrder";
import { SupplyOrderService } from "./supplyOrder.service";

@graphql.Resolver(() => SupplyOrder)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class SupplyOrderResolver extends SupplyOrderResolverBase {
  constructor(
    protected readonly service: SupplyOrderService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
