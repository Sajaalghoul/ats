import { Job } from './job.model';
import { Contact } from './contact.model';
import { User } from './user.model';
import { Info } from "./info.model";
import { Address } from './address.model';

export interface Company{
    info:Info,
    ownerUser:User,
    users:User[],
    contact:Contact,
    address:Address,
    jobs:Job[],
}