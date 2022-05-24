import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SupplyOrderService } from "./supplyOrder.service";
import { SupplyOrderControllerBase } from "./base/supplyOrder.controller.base";
import { AclValidateRequestInterceptor } from "src/interceptors/aclValidateRequest.interceptor";
import { SupplyOrder } from "./base/SupplyOrder";
import { SupplyOrderCreateInput } from "./base/SupplyOrderCreateInput";
import * as errors from "../errors";
import { isRecordNotFoundError } from "src/prisma.util";
import { SupplyOrderWhereUniqueInput } from "./base/SupplyOrderWhereUniqueInput";

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

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "SupplyOrder",
    action: "create",
    possession: "any",
  })
  @common.Post("AddNewSupplyOrder")
  @swagger.ApiCreatedResponse({ type: SupplyOrder })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(
    @common.Body() data: SupplyOrderCreateInput
  ): Promise<SupplyOrder> {
    let randomProductSerialNumber: string = await this.service.getSerialNumbers();
    let randomSupplierID: string = await this.service.getSupplierIDs();

    data.productSerialNumber = randomProductSerialNumber;
    data.supplierId = { id: randomSupplierID };
    data.status = "In progress";

    const result = await this.service.create({
      data: {
        ...data,

        supplierId: data.supplierId
          ? {
            connect: data.supplierId,
          }
          : undefined,
      },
      select: {
        createdAt: true,
        id: true,
        productSerialNumber: true,
        status: true,

        supplierId: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    const id:string = result.id;
    this.service.successOrFailure(id);
    console.log(id);
    return result;
  }



  @nestAccessControl.UseRoles({
    resource: "SupplyOrder",
    action: "delete",
    possession: "any",
  })
  @common.Delete("DeleteAll")
  @swagger.ApiOkResponse({ type: SupplyOrder })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async DeleteAll(

  ): Promise<any> {
   
    return await this.service.DeleteMany({})
  }

}