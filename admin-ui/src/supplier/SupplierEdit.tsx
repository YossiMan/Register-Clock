import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { SupplyOrderTitle } from "../supplyOrder/SupplyOrderTitle";

export const SupplierEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Supplier Name" source="supplierName" />
        <ReferenceArrayInput
          source="supplyOrders"
          reference="SupplyOrder"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SupplyOrderTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
