import { Roles } from "./roles.type";

export type User = {
  id?: string;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  role: Roles;
  avatar?: string;
  isActive: boolean;
};

