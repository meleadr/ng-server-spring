import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from "../shared/shared.module";
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import { HeaderComponent } from './components/header/header.component';
import {AuthService} from "./services/auth.service";
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import {DeleteDialogComponent} from "./components/delete-dialog/delete-dialog.component";



@NgModule({
  declarations: [
    HeaderComponent,
    DeleteDialogComponent,
    PageNotFoundComponent,
  ],
  exports: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    HttpClientModule,
  ],
  providers: [
      AuthService,
  ]
})
export class CoreModule { }
