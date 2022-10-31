import { DropDown } from './../../models/drop-down.model';
import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
 declare var $:any;
@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit, AfterViewInit {
  @Input() label:string;
  @Input() list:DropDown[]=[];
  @Input() selectedValue:number;
  @Output() onItemSelect:EventEmitter<DropDown>=new EventEmitter<DropDown>();
  constructor() { }
  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
  }

  onSelect(event:any):void{
    const item=this.list.find(i=>i.id == event.target.value)
    this.onItemSelect.emit(item);
    console.log("submitted", item);

  }
}
