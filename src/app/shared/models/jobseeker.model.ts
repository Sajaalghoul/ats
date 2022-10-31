import { Language } from './language.model';
import { Experience } from './experience.model';
import { Education } from './education.model';
import { Address } from './address.model';
import { Contact } from './contact.model';
import { User } from "./user.model";
import { Skill } from './skill.model';

export interface Jobseeker{
    user:User,
    contact:Contact,
    address:Address,
    educations:Education[],
    experience:Experience[],
    skills:Skill[],
    languages:Language[]


}