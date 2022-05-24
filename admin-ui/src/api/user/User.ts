export type User = {
  createdAt: Date;
  firstName: string | null;
  form_1: boolean | null;
  form_2: boolean | null;
  form_3: boolean | null;
  id: string;
  lastName: string | null;
  roles: Array<string>;
  updatedAt: Date;
  username: string;
};
