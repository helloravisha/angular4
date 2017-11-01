/**
 * Created by ravisha on 3/25/17.
 */
/**
 * Created by ravisha on 3/11/17.
 */
import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';


import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { ForgotpasswordComponent } from './component/login/forgotpassword.component';
import { RegisterationComponent } from './component/login/registeration.component';
import {MenuComponent} from "./component/menu/menu.component";




const appRoutes: Routes = [
  { path:'', component:LoginComponent },
  { path: 'Registration', component: RegisterationComponent},
  { path: 'Menu', component: MenuComponent},
  { path: 'Forgotpassword', component: ForgotpasswordComponent}

];




export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);


