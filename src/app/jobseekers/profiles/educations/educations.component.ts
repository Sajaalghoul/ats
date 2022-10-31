import { Education } from './../../../shared/models/education.model';
import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-educations',
  templateUrl: './educations.component.html',
  styleUrls: ['./educations.component.scss']
})
export class EducationsComponent implements OnInit {
  @Input() data:Education[];
  @Output() onUpdate: EventEmitter<Education[]>=new EventEmitter<Education[]>();
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
  onFormUpdate(formData:Education){
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
