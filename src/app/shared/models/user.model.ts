import { Role } from './../enums/role.enum';
export interface User {
    id:number,
    firstName:string,
    lastName:string,
    email:string,
    role:Role
}
