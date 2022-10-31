import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Skill } from 'src/app/shared/models/skill.model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  @Input() data:Skill[];
  @Output() onUpdate: EventEmitter<Skill[]>=new EventEmitter<Skill[]>();
  showAddFormStatus:boolean=false;
  formData:any=null;
  formType:number=1;
  selectedIndex=0;
  constructor() { }

  ngOnInit(): void {
  }
  toogleAddForm():void{
    this.formType=1;
    // this.formData=null; 
    this.showAddFormStatus=!this.showAddFormStatus;
  }
  onFormUpdate(formData:Skill){
    if(this.formType===1){
      this.data.push(formData);   
    }else{
      console.log("saja")
      this.data[this.selectedIndex]=formData;
    }
  }
  onEdit(index:number):void{
    this.showAddFormStatus=false;
    this.formData==null;
    this.formType=2;
    setTimeout(() =>{
      this.formData=this.data[index];
      this.selectedIndex=index;
      this.showAddFormStatus=true;
    },1000)
  
  }
  onDelete(index:number):void{
    this.data.splice(index,1);
  }

}


