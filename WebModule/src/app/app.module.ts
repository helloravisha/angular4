import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';
import { AppComponent } from './app.component';
import {Routes, RouterModule} from "@angular/router";
import {routing} from './app.routing';


import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {AppConstants} from "./constants/AppConstants";
import {ErrorService} from "./service/error.service";
import { LoginService } from "./service/login.service";
import {PathUtil} from "./util/PathUtil";
import {HeaderAdminComponent} from "./component/header-admin/header-admin.component";
import { Header1Component } from "./component/header1/header1.component";
import { LoginComponent } from './component/login/login.component';
import { ForgotpasswordComponent } from './component/login/forgotpassword.component';
import { RegisterationComponent } from './component/login/registeration.component';
import { HeaderComponent } from './component/header/header.component';
import { MenuComponent } from './component/menu/menu.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderAdminComponent,
    LoginComponent,
    ForgotpasswordComponent,
    RegisterationComponent,
    Header1Component,
    HeaderComponent,
    MenuComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    DataTablesModule,
    ReactiveFormsModule,
    routing


  ],
  providers: [AppConstants,ErrorService,PathUtil,LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
