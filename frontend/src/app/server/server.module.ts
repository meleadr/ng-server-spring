import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServerRoutingModule } from './server-routing.module';
import { ServerListComponent } from './components/server-list/server-list.component';


@NgModule({
  declarations: [
    ServerListComponent
  ],
  imports: [
    CommonModule,
    ServerRoutingModule
  ]
})
export class ServerModule { }
