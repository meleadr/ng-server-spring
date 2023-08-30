import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ServerListComponent} from "./components/server-list/server-list.component";

const routes: Routes = [
  { path: 'server', component: ServerListComponent },
  { path: '', pathMatch: 'full', redirectTo: 'server' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServerRoutingModule { }
