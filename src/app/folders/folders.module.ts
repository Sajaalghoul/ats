import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoldersRoutingModule } from './folders-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FoldersRoutingModule,
    SharedModule
  ]
})
export class FoldersModule { }
