import { Experience } from './../../../../shared/models/experience.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DropDown } from 'src/app/shared/models/drop-down.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DropDownService } from 'src/app/shared/services/drop-down.service';

@Component({
  selector: 'app-experience-add',
  templateUrl: './experience-add.component.html',
  styleUrls: ['./experience-add.component.scss']
})
export class ExperienceAddComponent implements OnInit {

  @Input() formData: Experience;
  @Output() onUpdate: EventEmitter<Experience>= new EventEmitter<Experience>();
  countryList:DropDown[];
  cityList:DropDown[];
  formGroup:FormGroup;
  notvalid: boolean;
  constructor(private fb:FormBuilder,private dropDownService:DropDownService) {
    this.countryList=this.dropDownService.getCountries();
    this.cityList=this.dropDownService.getCities(1,true);

   }

  ngOnInit(): void {
    this.formGroup=this.fb.group({
      id:[this.formData?.id, Validators.required],
      position:[this.formData?.position, Validators.required],
      country:[this.formData?.countryId, Validators.required],
      city:[this.formData?.cityId, Validators.required],
      company:[this.formData?.company, Validators.required],
      start:[this.formData?.startDate, Validators.required],
      end:[this.formData?.endDate, Validators.required],
      present:[this.formData?.presentStatus],
      salary:[this.formData?.salary, Validators.required]
    }  
    )
  }

  onItemSelect(item:any, type:string):void{
    if(type=='country'){
        this.formGroup.get('country').setValue(item.id);
        this.cityList=this.dropDownService.getCities(item.id,false);
        
        
      }
      else if(type=='city'){
        this.formGroup.get('city').setValue(item.id);
        
      }

  }
  onSubmit():void{
    if(this.formGroup.valid){
      const formValues=this.formGroup.value;
      const obj={
        id:formValues.id,
        position:formValues.position,
        countryId:formValues.country,
        cityId:formValues.city,
        company:formValues.company,
        startDate:formValues.start,
        endDate:formValues.end,
        presentStatus:formValues.present,
        salary:formValues.salary,
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