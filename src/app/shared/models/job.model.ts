import { Range } from "./range.model";
export interface Job {
    id:number,
    titile:string,
    sectorId:number,
    functionalAreaId:number,
    countryId:number,
    cityId:number,
    yearsOfEexperience:Range,
    expectedSalary:Range,
    highEducationLevel :number,
    nationalityId:number,
    languageIds :number[],
    skillIds:number[],
    description:string,
    requirments:string[],
    benefitIds: number[],
    




    


    
}