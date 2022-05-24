import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { StoreServiceBase } from "./base/store.service.base";
import { Store } from "./base/Store";


@Injectable()
export class StoreService extends StoreServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }

  //Get all product ID's from the store:
  async getIDs(): Promise<string[]> {
    const result = await this.prisma.store.findMany({});
    const productIDs = result.map(item=>item.id);
    return productIDs;
  }

}
