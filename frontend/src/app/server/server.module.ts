import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServerRoutingModule } from './server-routing.module';
import { ServerListComponent } from './components/server-list/server-list.component';
import {ServersService} from "./services/servers.service";
import {SharedModule} from "../shared/shared.module";
import { ServerFormComponent } from './components/server-form/server-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import { DeleteDialogComponent } from '../core/components/delete-dialog/delete-dialog.component';


@NgModule({
  declarations: [
    ServerListComponent,
    ServerFormComponent,
    DeleteDialogComponent
  ],
  imports: [
    CommonModule,
    ServerRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  providers: [
    ServersService
  ]
})
export class ServerModule { }
