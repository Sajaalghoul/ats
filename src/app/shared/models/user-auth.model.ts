import { User } from "./user.model";


export interface userAuth extends User  {
    permissions: string[];
    
}