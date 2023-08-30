import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServerRoutingModule } from './server-routing.module';
import { ServerListComponent } from './components/server-list/server-list.component';
import {ServersService} from "./services/servers.service";
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    ServerListComponent
  ],
  imports: [
    CommonModule,
    ServerRoutingModule,
    SharedModule
  ],
  providers: [
    ServersService
  ]
})
export class ServerModule { }
