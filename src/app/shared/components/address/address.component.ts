import { Address } from './../../models/address.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {
  @Input() data :Address;
  @Output() onUpdate: EventEmitter<Address>=new EventEmitter<Address>();
  formGroup:FormGroup;
  notvalid:boolean= false;
  constructor(private fb:FormBuilder) { 
   
  }
  ngOnInit(): void {
    this.formGroup=this.fb.group(
      {
        country:[this.data?.country,Validators.required],
        city:[this.data?.city,[Validators.required]],
        street:[this.data?.street,Validators.required],
        buildingNumber:[this.data?.buildingNumber,Validators.required],
        region:[this.data?.region,Validators.required],
      }
    ) 
  }
  onSubmit():void{
    if(this.formGroup.valid){
        const formValues= this.formGroup.value;
        let formData:Address={
          country: formValues.country,
          city: formValues.city,
          street: formValues.street,
          buildingNumber: formValues.buildingNumber,
          region: formValues.region,
        };
    console.log(formData);
    function clear(FormGroupp:any):void{
      Object.keys(FormGroupp.controls).forEach(
        key=>{
          if(FormGroupp.get(key) instanceof FormGroup){
               clear(FormGroupp.get(key) as FormGroup)
              }
          else{
            FormGroupp.get(key).setValue(null);}
        } )
    }
       clear(this.formGroup);
       this.formGroup.markAsUntouched();
       this.notvalid=false;
       this.onUpdate.emit(formData);
      }
         else{
            this.notvalid=true;
            this.formGroup.markAllAsTouched();
    }
  }

}
