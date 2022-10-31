import { DropDown } from './../models/drop-down.model';
import { dropDownParent } from './../models/drop-down-parent.model';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DropDownService {
  dropDownKey:string='dropdowns';
  constructor() { }
  getAll():Observable<any>{
    let dropdowns:any={
    };
    dropdowns['countries']=[
      
        {id:1,name:"Palestine"},
        {id:2,name:"Jordan"},
    ];
    dropdowns['cities']=[
      {id:1,name:"Gaza",parentId:1},
      {id:2,name:"Nablus",parentId:1},
      {id:3,name:"Ramalah",parentId:1},
      {id:4,name:"Amman",parentId:2},
      {id:5,name:"Irbid",parentId:2}
  ];
  dropdowns['sectors']=[
    {id:1,name:"It and Managment"},
    {id:2,name:"Accounting"},
];
  dropdowns['functionalAreas']=[
    {id:1,name:"Computer Science"},
    {id:2,name:"Marketing"},
    {id:3,name:"Health Care"},
    

  ];
  dropdowns['languages']=[
    {id:1,name:"Arabic"},
    {id:2,name:"English"},
  ];
  dropdowns['benefits']=[
    {id:1,name:"Work From Home"},
    {id:2,name:"Health Insurance"},
    {id:3,name:"flexible Hours"},
  ];
  dropdowns['jobType']=[
    {id:1,name:"parttime"},
    {id:2,name:"fulltine"},

  ];
  dropdowns['nationality']=[
    {id:1,name:"palestinian"},
    {id:2,name:"american"},
  ];
  dropdowns['educationlevel']=[
    {id:1,name:"eng"},
    {id:2,name:"doctor"},
  ];
  dropdowns['skills']=[
    {id:1,name:"drawing"},
    {id:2,name:"programming"},
  ];
  dropdowns['levelForLanguagesOrSkills']=[
    {id:1,name:"beginner"},
    {id:2,name:"intermidiate"},
    {id:3,name:"advanced"},
  ];
  dropdowns['status']=[
    {id:1,name:"good"},
    {id:2,name:"bad"},
  ];
  dropdowns['majors']=[
    {id:1,name:"Engineering"},
    {id:2,name:"Doctor"},
  ];
  dropdowns['universities']=[
    {id:1,name:"alazhar university",parentId:1},
    {id:2,name:"islamic university",parentId:1},
    {id:3,name:"irbid university",parentId:2},
  ];

    return of(dropdowns);
     
}
   setDropDownStorage(dropdown:any):void{
    localStorage.setItem('dropdowns',JSON.stringify(dropdown));
  }
    getDropDown():any{
      return JSON.parse(localStorage.getItem(this.dropDownKey)) ;
  }
    getCountries():DropDown[]{
        return this.getDropDown && (JSON.parse(localStorage.getItem(this.dropDownKey))).countries;
  }
    getCities(id:number,all:boolean=false):dropDownParent[]{
      if(all){
        return this.getDropDown()?.cities;
      }
      if(this.getDropDown()?.cities){//.cities{}
        return this.getDropDown().cities.filter((val:any)=>{
          return val.parentId==id;
        }

        );
      }
      return null;
    
}  
    getSectors():DropDown[]{
      return this.getDropDown() && this.getDropDown().sectors;
    }
    getFunctionalAreas():DropDown[]{
      return this.getDropDown() &&this.getDropDown().functionalAreas;
    } 
    getJobTypes():DropDown[]{
      return this.getDropDown() &&this.getDropDown().jobTypes;
    }  
    getNationality():DropDown[]{
      return this.getDropDown() &&this.getDropDown().nationality;
    }  
    getEducationLevel():DropDown[]{
      return this.getDropDown() &&this.getDropDown().educationalLevel;
    } 
    getLanguages():DropDown[]{
      return this.getDropDown() &&this.getDropDown().languages;
    } 
    getSkills():DropDown[]{
      return this.getDropDown() &&this.getDropDown().skills;
    } 
    getBenefits():DropDown[]{
      return this.getDropDown() &&this.getDropDown().benefits;
    } 
    getLevelForLanguagesOrSkills():DropDown[]{
      return this.getDropDown() &&this.getDropDown().levelForLanguagesOrSkills;
    } 
    getStatus():DropDown[]{
      return this.getDropDown() &&this.getDropDown().status;
    } 
    getMajors():DropDown[]{
      return this.getDropDown() &&this.getDropDown().majors;
    } 
    getUniversities(id:number,all:boolean=false):dropDownParent[]{
      if(all){
        return this.getDropDown()?.universities;
      }
      if(this.getDropDown()?.universities){
        return this.getDropDown().universities.filter((val:any)=>{
          return val.parentId==id;
        }

        );
      }
      return null;
    }        
   }  


