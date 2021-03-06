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
import { CustomerCreateNestedManyWithoutOrdersInput } from "./CustomerCreateNestedManyWithoutOrdersInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { StorageCreateNestedManyWithoutOrdersInput } from "./StorageCreateNestedManyWithoutOrdersInput";
@InputType()
class OrderCreateInput {
  @ApiProperty({
    required: false,
    type: () => CustomerCreateNestedManyWithoutOrdersInput,
  })
  @ValidateNested()
  @Type(() => CustomerCreateNestedManyWithoutOrdersInput)
  @IsOptional()
  @Field(() => CustomerCreateNestedManyWithoutOrdersInput, {
    nullable: true,
  })
  customerId?: CustomerCreateNestedManyWithoutOrdersInput;

  @ApiProperty({
    required: false,
    type: () => StorageCreateNestedManyWithoutOrdersInput,
  })
  @ValidateNested()
  @Type(() => StorageCreateNestedManyWithoutOrdersInput)
  @IsOptional()
  @Field(() => StorageCreateNestedManyWithoutOrdersInput, {
    nullable: true,
  })
  productSerialNumber?: StorageCreateNestedManyWithoutOrdersInput;
}
export { OrderCreateInput };
