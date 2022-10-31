import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobseekersRoutingModule } from './jobseekers-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    JobseekersRoutingModule,
    SharedModule
  ]
})
export class JobseekersModule { }
