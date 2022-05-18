/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { SupplyOrderService } from "../supplyOrder.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { SupplyOrderCreateInput } from "./SupplyOrderCreateInput";
import { SupplyOrderWhereInput } from "./SupplyOrderWhereInput";
import { SupplyOrderWhereUniqueInput } from "./SupplyOrderWhereUniqueInput";
import { SupplyOrderFindManyArgs } from "./SupplyOrderFindManyArgs";
import { SupplyOrderUpdateInput } from "./SupplyOrderUpdateInput";
import { SupplyOrder } from "./SupplyOrder";
@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class SupplyOrderControllerBase {
  constructor(
    protected readonly service: SupplyOrderService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "SupplyOrder",
    action: "create",
    possession: "any",
  })
  @common.Post()
  @swagger.ApiCreatedResponse({ type: SupplyOrder })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(
    @common.Body() data: SupplyOrderCreateInput
  ): Promise<SupplyOrder> {
    return await this.service.create({
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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "SupplyOrder",
    action: "read",
    possession: "any",
  })
  @common.Get()
  @swagger.ApiOkResponse({ type: [SupplyOrder] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(SupplyOrderFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<SupplyOrder[]> {
    const args = plainToClass(SupplyOrderFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "SupplyOrder",
    action: "read",
    possession: "own",
  })
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: SupplyOrder })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: SupplyOrderWhereUniqueInput
  ): Promise<SupplyOrder | null> {
    const result = await this.service.findOne({
      where: params,
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
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "SupplyOrder",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: SupplyOrder })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: SupplyOrderWhereUniqueInput,
    @common.Body() data: SupplyOrderUpdateInput
  ): Promise<SupplyOrder | null> {
    try {
      return await this.service.update({
        where: params,
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
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @nestAccessControl.UseRoles({
    resource: "SupplyOrder",
    action: "delete",
    possession: "any",
  })
  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: SupplyOrder })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: SupplyOrderWhereUniqueInput
  ): Promise<SupplyOrder | null> {
    try {
      return await this.service.delete({
        where: params,
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
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
