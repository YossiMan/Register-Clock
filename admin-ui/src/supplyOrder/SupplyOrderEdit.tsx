import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { SupplierTitle } from "../supplier/SupplierTitle";

export const SupplyOrderEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
