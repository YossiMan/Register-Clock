import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { SupplyOrderServiceBase } from "./base/supplyOrder.service.base";

@Injectable()
export class SupplyOrderService extends SupplyOrderServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
