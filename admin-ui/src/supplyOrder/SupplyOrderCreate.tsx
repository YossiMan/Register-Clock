import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { SupplierTitle } from "../supplier/SupplierTitle";

export const SupplyOrderCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Product Serial Number" source="productSerialNumber" />
        <TextInput label="Status" source="status" />
        <ReferenceInput
          source="supplier.id"
          reference="Supplier"
          label="Supplier ID"
        >
          <SelectInput optionText={SupplierTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
