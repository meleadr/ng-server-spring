import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'server', loadChildren: () => import('./server/server.module').then(m => m.ServerModule) },
  { path: '**', redirectTo: 'server' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
