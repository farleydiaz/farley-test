import { Roles } from './Roles';

export interface User {
    uid?: string;
    email: string;
    roles: Roles;
    firstName: string,
    lastName: string,
    status: number
}
