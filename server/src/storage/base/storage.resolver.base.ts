/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateStorageArgs } from "./CreateStorageArgs";
import { UpdateStorageArgs } from "./UpdateStorageArgs";
import { DeleteStorageArgs } from "./DeleteStorageArgs";
import { StorageFindManyArgs } from "./StorageFindManyArgs";
import { StorageFindUniqueArgs } from "./StorageFindUniqueArgs";
import { Storage } from "./Storage";
import { Order } from "../../order/base/Order";
import { StorageService } from "../storage.service";

@graphql.Resolver(() => Storage)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class StorageResolverBase {
  constructor(
    protected readonly service: StorageService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Storage",
    action: "read",
    possession: "any",
  })
  async _storagesMeta(
    @graphql.Args() args: StorageFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Storage])
  @nestAccessControl.UseRoles({
    resource: "Storage",
    action: "read",
    possession: "any",
  })
  async storages(
    @graphql.Args() args: StorageFindManyArgs
  ): Promise<Storage[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Storage, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Storage",
    action: "read",
    possession: "own",
  })
  async storage(
    @graphql.Args() args: StorageFindUniqueArgs
  ): Promise<Storage | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Storage)
  @nestAccessControl.UseRoles({
    resource: "Storage",
    action: "create",
    possession: "any",
  })
  async createStorage(
    @graphql.Args() args: CreateStorageArgs
  ): Promise<Storage> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        order: args.data.order
          ? {
              connect: args.data.order,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Storage)
  @nestAccessControl.UseRoles({
    resource: "Storage",
    action: "update",
    possession: "any",
  })
  async updateStorage(
    @graphql.Args() args: UpdateStorageArgs
  ): Promise<Storage | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          order: args.data.order
            ? {
                connect: args.data.order,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Storage)
  @nestAccessControl.UseRoles({
    resource: "Storage",
    action: "delete",
    possession: "any",
  })
  async deleteStorage(
    @graphql.Args() args: DeleteStorageArgs
  ): Promise<Storage | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Order, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Order",
    action: "read",
    possession: "any",
  })
  async order(@graphql.Parent() parent: Storage): Promise<Order | null> {
    const result = await this.service.getOrder(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
