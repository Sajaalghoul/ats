import { Language } from './../../../../shared/models/language.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DropDown } from 'src/app/shared/models/drop-down.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DropDownService } from 'src/app/shared/services/drop-down.service';

@Component({
  selector: 'app-langauges-add',
  templateUrl: './langauges-add.component.html',
  styleUrls: ['./langauges-add.component.scss']
})
export class LangaugesAddComponent implements OnInit {
    @Input() formData: Language;
    @Output() onUpdate: EventEmitter<Language>= new EventEmitter<Language>();
    LanguageList:DropDown[];
    LevelList:DropDown[];
    formGroup:FormGroup;
    notvalid: boolean;
    constructor(private fb:FormBuilder,private dropDownService:DropDownService) {
      this.LanguageList=this.dropDownService.getLanguages();
      this.LevelList=this.dropDownService.getLevelForLanguagesOrSkills();
  
  
     }
  
    ngOnInit(): void {
      this.formGroup=this.fb.group({
        id:[this.formData?.id],
        name:[this.formData?.nameId],
        level:[this.formData?.levelId, Validators.required],
        native:[this.formData?.native],

      }  
      )
    }
  
    onItemSelect(item:any, type:string):void{
        if(type=='name'){
            this.formGroup.get('name').setValue(item.id);
            
        }
        else if(type=='level'){
          this.formGroup.get('level').setValue(item.id);
          
      }
    }
    onSubmit():void{
      if(this.formGroup.valid){
        const formValues=this.formGroup.value;
        const obj={
          id:formValues.id,
          nameId:formValues.name,
          levelId:formValues.level,
          native:formValues.native
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