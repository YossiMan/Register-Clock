import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { ProductServiceBase } from "./base/product.service.base";

@Injectable()
export class ProductService extends ProductServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }

  async serialNumGenerator(range:number) {
    const Generator = (value: number) => Math.floor(Math.random() * value);
    const random: number = Generator(100000);
  }
}