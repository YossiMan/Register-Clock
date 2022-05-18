import { Module } from "@nestjs/common";
import { StorageModuleBase } from "./base/storage.module.base";
import { StorageService } from "./storage.service";
import { StorageController } from "./storage.controller";
import { StorageResolver } from "./storage.resolver";

@Module({
  imports: [StorageModuleBase],
  controllers: [StorageController],
  providers: [StorageService, StorageResolver],
  exports: [StorageService],
})
export class StorageModule {}
