import { Address } from './../../../shared/models/address.model';
import { Component, Input, OnInit } from '@angular/core';
import { Contact } from 'src/app/shared/models/contact.model';
import { User } from 'src/app/shared/models/user.model';
import { Education } from 'src/app/shared/models/education.model';
import { Experience } from 'src/app/shared/models/experience.model';
import { Skill } from 'src/app/shared/models/skill.model';
import { Language } from 'src/app/shared/models/language.model';
import { DropDownService } from 'src/app/shared/services/drop-down.service';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.scss']
})
export class ProfileInfoComponent implements OnInit {
  @Input() address: Address;
  @Input() contact:Contact;
  @Input() user:User;
  @Input() educations:Education[];
  @Input() experiences:Experience[];
  experiencess:Experience[];
  @Input() skills:Skill[];
  @Input() languages:Language[];
  skillsN:string[]=[];
  languagesN:string[]=[];
  educationsN:string[]=[];
  @Input() saveall:boolean;
  save: boolean=false;
  constructor(private dropDownService:DropDownService) { }
  
  ngOnInit(): void {
      
    
  }
  find(array:any[],servicearray:any[],names:any[]):void{
    for (var val of servicearray){
        names.push(array.find(x=>x.id == val.nameId).name)
      }
    }
  findeductions(array:any[],servicearray:any[],names:any[]):void{
      for (var val of servicearray){
          names.push(array.find(x=>x.id == val.majorId)?.name)
        }
      }
    onchange():void{
        this.save=true;
        this.experiencess=[...this.experiences];
        this.skillsN=[];
        this.languagesN=[];
        this.educationsN=[];
        this.find(this.dropDownService.getSkills(),this.skills,this.skillsN);
        this.find(this.dropDownService.getLanguages(),this.languages,this.languagesN);
        this.findeductions(this.dropDownService.getMajors(),this.educations,this.educationsN);
      }
  }


