import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { SupplierServiceBase } from "./base/supplier.service.base";

@Injectable()
export class SupplierService extends SupplierServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }

  async getIDs(): Promise<string[]> {
    const result = await this.prisma.supplier.findMany({});
    const supplierIDs = result.map(item=>item.id);
    return supplierIDs;
  }
}
