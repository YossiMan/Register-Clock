import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { StorageServiceBase } from "./base/storage.service.base";

@Injectable()
export class StorageService extends StorageServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
