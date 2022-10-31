import { DropDownService } from './shared/services/drop-down.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,OnDestroy{
  subsicriptions: Subscription[]=[];

  items:any[]=[
    {id:1,name:"Computer Network"},
    {id:2,name:"Accounting"}
  ]
  items2:any[]=[
    {id:1,name:"Computer Network"},
    {id:2,name:"Accounting"}
  ]
  selectedItem:any=null;
  constructor(private dropDownService:DropDownService){}

  ngOnInit(): void {
    
    this.loadDropDowns();
    this.dropDownService.getDropDown();
   console.log(this.dropDownService.getCountries());
  }
  loadDropDowns() {
   var sub=this.dropDownService.getAll().subscribe(
      res=>{
        this.dropDownService.setDropDownStorage(res);
        console.log(res);

      })  
    this.subsicriptions.push(sub);
    
   
   
  }
  onItemChange(item:any,type:string):void{
    if(type=='sel1'){
      this.selectedItem=item;
    }
    else{
      console.log(item);
    }
  

  }
  ngOnDestroy(): void {
    this.subsicriptions.forEach(
      sub=>{
        sub.unsubscribe();
      }
    )
  }
;
  title = 'ats';
 
}
