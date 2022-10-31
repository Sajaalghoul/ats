import { DropDownService } from './../../../../shared/services/drop-down.service';
import { DropDown } from './../../../../shared/models/drop-down.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Education } from './../../../../shared/models/education.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-education-add',
  templateUrl: './education-add.component.html',
  styleUrls: ['./education-add.component.scss']
})
export class EducationAddComponent implements OnInit {
  @Input() formData: Education;
  @Output() onUpdate: EventEmitter<Education>= new EventEmitter<Education>();
  majorList:DropDown[];
  countryList:DropDown[];
  cityList:DropDown[];
  universityList:DropDown[];
  formGroup:FormGroup;
  notvalid: boolean;
  constructor(private fb:FormBuilder,private dropDownService:DropDownService) {
    this.majorList=this.dropDownService.getMajors();
    this.countryList=this.dropDownService.getCountries();
    this.cityList=this.dropDownService.getCities(1,true);
    this.universityList=this.dropDownService.getUniversities(1,true);

   }

  ngOnInit(): void {
    this.formGroup=this.fb.group({
      id:[this.formData?.id],
      major:[this.formData?.majorId, Validators.required],
      country:[this.formData?.countryId, Validators.required],
      city:[this.formData?.cityId, Validators.required],
      university:[this.formData?.universityId, Validators.required],
      start:[this.formData?.startDate],
      end:[this.formData?.endDate],
      present:[this.formData?.presentStatus]
    }  
    )
  }

  onItemSelect(item:any, type:string):void{
      if(type=='major'){
          this.formGroup.get('major').setValue(item.id);
          
      }
      else if(type=='country'){
        this.formGroup.get('country').setValue(item.id);
        this.cityList=this.dropDownService.getCities(item.id,false);
        this.universityList=this.dropDownService.getUniversities(item.id,false);
        
      }
      else if(type=='city'){
        this.formGroup.get('city').setValue(item.id);
        
      }
      else if(type=='university'){
        this.formGroup.get('university').setValue(item.id);
       
        
      }
  }
  onSubmit():void{
    if(this.formGroup.valid){
      const formValues=this.formGroup.value;
      const obj={
        id:formValues.id,
        majorId:formValues.major,
        countryId:formValues.country,
        cityId:formValues.city,
        universityId:formValues.university,
        startDate:formValues.start,
        endDate:formValues.end,
        presentStatus:formValues.present,
      }
      this.onUpdate.emit(obj);
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
      console.log('submitttt',obj);

    }else{
      this.notvalid=true;
      this.formGroup.markAllAsTouched();
      console.log('submit');
    }
  
  }

}