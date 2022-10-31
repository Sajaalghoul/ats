import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  @Input() data:User;
  @Output() onUpdate: EventEmitter<User>=new EventEmitter<User>();
  formGroup:FormGroup;
  notvalid:boolean= false;
  constructor(private fb:FormBuilder) { 
   
  }

  ngOnInit(): void {
    this.formGroup=this.fb.group(
      {
        id:[this.data?.id,Validators.required],
        firstName:[this.data?.firstName,Validators.required],
        lastName:[this.data?.email,Validators.required],
        email:[this.data?.lastName,[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$" 
        )]],
        role:[this.data?.role,Validators.required],
      }
    ) 
  }
  onSubmit():void{
    if(this.formGroup.valid){
        const formValues= this.formGroup.value;
        let formData:User={
            id :formValues.id,
            firstName:formValues.firstName,
            lastName:formValues.lastName,
            email:formValues.email,
            role:formValues.role
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
