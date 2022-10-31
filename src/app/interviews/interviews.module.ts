import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InterviewsRoutingModule } from './interviews-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InterviewsRoutingModule,
    SharedModule
  ]
})
export class InterviewsModule { }
