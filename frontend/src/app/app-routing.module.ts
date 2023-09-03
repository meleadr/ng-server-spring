import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageNotFoundComponent} from "./core/components/page-not-found/page-not-found.component";
import {authGuard} from "./core/guards/auth.guard";
import {LoginComponent} from "./auth/components/login/login.component";

const routes: Routes = [
  { path: 'server', loadChildren: () => import('./server/server.module').then(m => m.ServerModule), canMatch: [authGuard]  },
  { path: 'login', component: LoginComponent },
  {path: '', redirectTo: '/server', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
        routes,
        {
          enableTracing: false, // <-- debugging purposes only
        }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
