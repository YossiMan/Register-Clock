/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { SupplyOrderCreateNestedManyWithoutSuppliersInput } from "./SupplyOrderCreateNestedManyWithoutSuppliersInput";
import { Type } from "class-transformer";
@InputType()
class SupplierCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  supplierName?: string | null;

  @ApiProperty({
    required: false,
    type: () => SupplyOrderCreateNestedManyWithoutSuppliersInput,
  })
  @ValidateNested()
  @Type(() => SupplyOrderCreateNestedManyWithoutSuppliersInput)
  @IsOptional()
  @Field(() => SupplyOrderCreateNestedManyWithoutSuppliersInput, {
    nullable: true,
  })
  supplyOrders?: SupplyOrderCreateNestedManyWithoutSuppliersInput;
}
export { SupplierCreateInput };