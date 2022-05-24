import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { StoreService } from "./store.service";
import { StoreControllerBase } from "./base/store.controller.base";
import { plainToClass } from "class-transformer";
import { StoreFindManyArgs } from "./base/StoreFindManyArgs";
import { Request } from "express";
import { AclValidateRequestInterceptor } from "src/interceptors/aclValidateRequest.interceptor";
import { Store } from "./base/Store";
import { StoreCreateInput } from "./base/StoreCreateInput";
import * as errors from "../errors";


@swagger.ApiTags("stores")
@common.Controller("stores")
export class StoreController extends StoreControllerBase {
  constructor(
    protected readonly service: StoreService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }

  //Get new product too the store:
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Store",
    action: "create",
    possession: "any",
  })
  @common.Post("AddNewProduct")
  @swagger.ApiCreatedResponse({ type: Store })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async AddNewProduct(@common.Body() data: StoreCreateInput): Promise<string[]> {
    await this.service.create({
      data: data,
      select: {
        createdAt: true,
        id: true,
        productName: true,
        productSerialNumber: true,
        quantity: true,
        updatedAt: true,
      },
    });
    const productList =  await this.service.getIDs();
    return productList;
  }
}
