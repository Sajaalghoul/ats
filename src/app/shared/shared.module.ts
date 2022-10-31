import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { AddressComponent } from './components/address/address.component';
import { ContactComponent } from './components/contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

let components=[
    AddressComponent,
    ContactComponent,
    DropdownComponent
]


@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  exports:[
    ...components,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
