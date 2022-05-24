import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { OrderService } from "./order.service";
import { OrderControllerBase } from "./base/order.controller.base";
import { AclFilterResponseInterceptor } from "src/interceptors/aclFilterResponse.interceptor";
import { Order } from "./base/Order";
import { OrderWhereUniqueInput } from "./base/OrderWhereUniqueInput";
import * as errors from "../errors";
import { request } from "express";

@swagger.ApiTags("orders")
@common.Controller("orders")
export class OrderController extends OrderControllerBase {
  constructor(
    protected readonly service: OrderService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Order",
    action: "read",
    possession: "own",
  })
  @common.Get("/:id/getOrderById")
  @swagger.ApiOkResponse({ type: Order })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: OrderWhereUniqueInput
  ): Promise<Order | null> {
    const id: any = params.id;
    const result = await this.service.findOne({
      where: {
        id: id,
      },
      include: {
        customerId: true,
        productSerialNumber: true
      }
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

}