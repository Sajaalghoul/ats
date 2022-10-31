import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Language } from 'src/app/shared/models/language.model';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss']
})
export class LanguagesComponent implements OnInit {
  @Input() data:Language[];
  @Output() onUpdate: EventEmitter<Language[]>=new EventEmitter<Language[]>();
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
  onFormUpdate(formData:Language){
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


