import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from "./material.module";
import {MemoryPipe} from "./pipes/memory.pipe";



@NgModule({
  declarations: [
      MemoryPipe
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    MaterialModule,
    MemoryPipe
  ]
})
export class SharedModule { }
