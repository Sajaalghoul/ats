import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Contact } from '../../models/contact.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @Input() data :Contact;
  @Output() onUpdate: EventEmitter<Contact>=new EventEmitter<Contact>();
  formGroup:FormGroup;
  notvalid:boolean= false;
  constructor(private fb:FormBuilder) { 
   
  }

  ngOnInit(): void {
    this.formGroup=this.fb.group(
      {
        name:[this.data?.name,Validators.required],
        email:[this.data?.email,[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$" 
        )]],
        mobile:[this.data?.mobile,Validators.required],
        fax:[this.data?.fax,Validators.required],
      }
    ) 
  }
  onSubmit():void{
    if(this.formGroup.valid){
        const formValues= this.formGroup.value;
        let formData:Contact={
          name :formValues.name,
          email:formValues.email,
          mobile:formValues.mobile,
          fax:formValues.fax
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
