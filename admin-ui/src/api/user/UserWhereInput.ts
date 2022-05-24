import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type UserWhereInput = {
  firstName?: StringNullableFilter;
  form_1?: BooleanNullableFilter;
  form_2?: BooleanNullableFilter;
  form_3?: BooleanNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
};
