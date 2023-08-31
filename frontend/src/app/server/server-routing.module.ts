import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ServerListComponent} from "./components/server-list/server-list.component";
import {ServerFormComponent} from "./components/server-form/server-form.component";

const routes: Routes = [
  { path: '', component: ServerListComponent, data: { subTitle: 'Liste des serveurs' }},
  { path: 'add', component: ServerFormComponent, data: { subTitle: 'Ajout d\'un serveur' }},
  { path: ':id', component: ServerFormComponent, data: { subTitle: 'Modification d\'un serveur' }},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServerRoutingModule { }
