import { Experience } from './../../../shared/models/experience.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit {
  @Input() data:Experience[];
  @Output() onUpdate: EventEmitter<Experience[]>=new EventEmitter<Experience[]>();
  showAddFormStatus:boolean=false;
  formData:any=null;
  formType:number=1;
  selectedIndex=0;
  constructor() { }

  ngOnInit(): void {
    
  }
  toogleAddForm():void{
    this.formType=1;
    this.formData=null; 
    this.showAddFormStatus=!this.showAddFormStatus;
  }
  onFormUpdate(formData:Experience){
    if(this.formType===1){
      this.data.push(formData);
    }else{
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
