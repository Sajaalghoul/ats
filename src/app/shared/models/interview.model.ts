import { Time } from "@angular/common";
import { User } from "./user.model";

export interface Interview{
    id:number,
    jobApplicationId:number,
    date:Date,
    time:Time,
    duration:string,
    interviewType:string,
    interviewDetails:string,
    interviewrs:User[],
}