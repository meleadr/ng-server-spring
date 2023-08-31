import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ServerListComponent} from "./components/server-list/server-list.component";
import {ServerFormComponent} from "./components/server-form/server-form.component";

const routes: Routes = [
  { path: '', component: ServerListComponent },
  { path: 'add', component: ServerFormComponent},
  { path: ':id', component: ServerFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServerRoutingModule { }
