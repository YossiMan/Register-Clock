import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SupplierService } from "./supplier.service";
import { SupplierControllerBase } from "./base/supplier.controller.base";
import { AclValidateRequestInterceptor } from "src/interceptors/aclValidateRequest.interceptor";
import { Supplier } from "./base/Supplier";
import { SupplierCreateInput } from "./base/SupplierCreateInput";
import * as errors from "../errors";

@swagger.ApiTags("suppliers")
@common.Controller("suppliers")
export class SupplierController extends SupplierControllerBase {
  constructor(
    protected readonly service: SupplierService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }



  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Supplier",
    action: "create",
    possession: "any",
  })
  @common.Post("AddNewSupplier")
  @swagger.ApiCreatedResponse({ type: Supplier })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async AddNewSupplier(@common.Body() data: SupplierCreateInput): Promise<string[]> {
    await this.service.create({
      data: data,
      select: {
        createdAt: true,
        id: true,
        supplierName: true,
        updatedAt: true,
      },
    });
    const supplierList =  await this.service.getIDs();
    return supplierList;
  }
}
