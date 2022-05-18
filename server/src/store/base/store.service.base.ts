/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, Store } from "@prisma/client";

export class StoreServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.StoreFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.StoreFindManyArgs>
  ): Promise<number> {
    return this.prisma.store.count(args);
  }

  async findMany<T extends Prisma.StoreFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.StoreFindManyArgs>
  ): Promise<Store[]> {
    return this.prisma.store.findMany(args);
  }
  async findOne<T extends Prisma.StoreFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.StoreFindUniqueArgs>
  ): Promise<Store | null> {
    return this.prisma.store.findUnique(args);
  }
  async create<T extends Prisma.StoreCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.StoreCreateArgs>
  ): Promise<Store> {
    return this.prisma.store.create<T>(args);
  }
  async update<T extends Prisma.StoreUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.StoreUpdateArgs>
  ): Promise<Store> {
    return this.prisma.store.update<T>(args);
  }
  async delete<T extends Prisma.StoreDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.StoreDeleteArgs>
  ): Promise<Store> {
    return this.prisma.store.delete(args);
  }
}
