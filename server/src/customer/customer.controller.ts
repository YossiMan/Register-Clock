
import { plainToClass, plainToInstance } from "class-transformer";
import { Request } from "express";
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CustomerService } from "./customer.service";
import { CustomerControllerBase } from "./base/customer.controller.base";
import { ApiNestedQuery } from "src/decorators/api-nested-query.decorator";
import { AclFilterResponseInterceptor } from "src/interceptors/aclFilterResponse.interceptor";
import { Customer } from "./base/Customer";
import { CustomerFindManyArgs } from "./base/CustomerFindManyArgs";

@swagger.ApiTags("customers")
@common.Controller("customers")
export class CustomerController extends CustomerControllerBase {
  constructor(
    protected readonly service: CustomerService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }

  
  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Customer",
    action: "read",
    possession: "any",
  })

  @common.Get("yossi")
  @swagger.ApiOkResponse({ type: [Customer] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(CustomerFindManyArgs)
  async findManyMore(@common.Req() request: Request): Promise<Customer[]> {

    const args = plainToInstance(CustomerFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        createdAt: true,
        customerName: true,
        Email: true,
        id: true,
        isBlocked: true,
        updatedAt: true,
      },
    });
  }


  
}

