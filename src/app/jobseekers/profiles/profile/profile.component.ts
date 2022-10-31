import { User } from './../../../shared/models/user.model';
import { Experience } from './../../../shared/models/experience.model';
import { Education } from './../../../shared/models/education.model';
import { Contact } from './../../../shared/models/contact.model';
import { Address } from './../../../shared/models/address.model';
import { Jobseeker } from './../../../shared/models/jobseeker.model';
import { Component, Input, OnInit } from '@angular/core';
import { Skill } from 'src/app/shared/models/skill.model';
import { Language } from 'src/app/shared/models/language.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  Jobseeker:Jobseeker;
  address: Address;
  contact:Contact;
  user:User;
  educations:Education[];
  experiences:Experience[];
  skills:Skill[];
  languages:Language[];
  saveall:boolean=false;
 
  constructor() { }

  ngOnInit(): void {
    this.educations=[
      {id:1,
        majorId:1,
        countryId:1,
        cityId:1,
        universityId:1,
        startDate:"6/15/19",
        endDate:"01-01-2020",
        presentStatus:false},
        {id:2,
          majorId:2,
          countryId:2,
          cityId:2,
          universityId:2,
          startDate:"6/15/18",
          endDate:"01-01-2020",
          presentStatus:true}
    ]
    this.languages=[
      { id:2,
        nameId:2,
        levelId:3,
        native:true},
        {id:1,
          nameId:1,
          levelId:2,
          native:false}
    ]
  
    this.skills=[
      {id:1,
        nameId:1,
        levelId:3},
        {id:2,
          nameId:2,
          levelId:3}
    ]
    this.experiences=[
      {id:1,
        position:"manger",
        countryId:1,
        company:"company1",
        cityId:1,
        salary:100,
        startDate:"6/15/19",
        endDate:"01-01-2020",
        presentStatus:false},
        {id:2,
          position:"employer",
          countryId:2,
          cityId:2,
          company:"company1",
          salary:200,
          startDate:"6/15/18",
          endDate:"01-01-2020",
          presentStatus:true}
    ]
  }
  onProfileUpdate(data:any, type:string):void{
    if(type === 'address'){
      this.address=data;
      console.log(this.address,"submitedd succsessfuly")
    }
    else if(type === 'user'){
      this.user=data;
      console.log(this.user,"submited succsessfuly")
    }
    else if(type=== 'contact'){
      this.contact=data;
      console.log(this.contact,"submited succsessfuly")
    }
    else if(type=== 'educations'){
      this.educations.push(data);
      console.log(this.educations,"submited succsessfuly")
    }
    else if(type=== 'experiences'){
      this.experiences.push(data);
      console.log(this.experiences,"submited succsessfuly")
    }
    else if(type=== 'skills'){
      this.skills.push(data);
      console.log(this.skills,"submited succsessfuly")
    }
    else if(type=== 'languages'){
      this.languages.push(data)
      console.log(this.experiences,"submited succsessfuly")
    }
  }
  onchange():void{
    this.saveall=true;
  }
  

}
