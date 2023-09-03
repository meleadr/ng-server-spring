import {inject, NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthService} from "./core/services/auth.service";
import {PageNotFoundComponent} from "./core/components/page-not-found/page-not-found.component";
import {authGuard} from "./core/guards/auth.guard";

const routes: Routes = [
  { path: 'server', loadChildren: () => import('./server/server.module').then(m => m.ServerModule), canActivate: [authGuard]  },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  {path: '', redirectTo: '/heroes-list', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
