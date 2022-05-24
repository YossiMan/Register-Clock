import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { SupplyOrderServiceBase } from "./base/supplyOrder.service.base";

@Injectable()
export class SupplyOrderService extends SupplyOrderServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }

  async getSerialNumbers(): Promise<string> {
    const result = await this.prisma.store.findMany({});
    const productSerialNumber = result.map(item => item.productSerialNumber);
    var randomProductSerialNumber: any = productSerialNumber[Math.floor(Math.random() * productSerialNumber.length)];
    return String(randomProductSerialNumber);
  }

  async getSupplierIDs(): Promise<string> {
    const result = await this.prisma.supplier.findMany({});
    const supplierChosen = result.map(item => item.id);
    var randomSupplierID: any = supplierChosen[Math.floor(Math.random() * supplierChosen.length)];
    return String(randomSupplierID);
  }

  async successOrFailure(id: string) {
    const request = function () {
      return new Promise(function (resolve): Promise<string> | void {
        var random_boolean = Math.random() < 0.7;
        // const status = random_boolean ? "success" : "Failure";
        setTimeout(() => resolve(random_boolean), 5000);
      })
    }
    let result = await request();

    //Change the status:
    const orderID: string = id;
    if (result == true) {
      await this.prisma.supplyOrder.update({
        where: {
          id: orderID
        },
        data: {
          status: "Delivery received!"
        },
        select: {
          status: true
        }

      });

    } else {
      await this.prisma.supplyOrder.update({
        where: {
          id: orderID
        },
        data: {
          status: "Shipping problem, please contact the supplier."
        },
        select: {
          status: true
        }

      });
    }
    

    console.log(result);
  }
  async DeleteMany(request:object){
    return await  this.prisma.supplyOrder.deleteMany(request)
  }

}
