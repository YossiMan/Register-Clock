import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import * as errors from "../errors";
import { ProductService } from "./product.service";
import { ProductControllerBase } from "./base/product.controller.base";
import { AclValidateRequestInterceptor } from "src/interceptors/aclValidateRequest.interceptor";
import { Product } from "./base/Product";
import { ProductCreateInput } from "./base/ProductCreateInput";

@swagger.ApiTags("products")
@common.Controller("products")
export class ProductController extends ProductControllerBase {
  constructor(
    protected readonly service: ProductService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Product",
    action: "create",
    possession: "any",
  })
  @common.Post("YossiAharoni")
  @swagger.ApiCreatedResponse({ type: Product })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(@common.Body() data: ProductCreateInput): Promise<Product> {
    
    const numberRange:number = 100000;
    data.serialNumber = await this.service.serialNumGenerator(numberRange)
    return await this.service.create({
      data: {
        ...data,

        order: data.order
          ? {
              connect: data.order,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        id: true,

        order: {
          select: {
            id: true,
          },
        },

        productName: true,
        serialNumber: true,
        updatedAt: true,
      },
    });
  }
  

}
