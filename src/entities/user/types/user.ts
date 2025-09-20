export enum UserRole {
  ADMIN = 'admin',
  USER = 'user',
  GUEST = 'guest',
}
export interface User {
  id: number;
  email: string;
  name: string;
  role: UserRole;
}
