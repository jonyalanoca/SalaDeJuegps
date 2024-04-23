import { NgModule } from '@angular/core';
import{DashboardComponent} from '../app/components/dashboard/dashboard.component'
import { RouterModule, Routes } from '@angular/router';
import {AutenticacionComponent} from '../app/components/autenticacion/autenticacion.component'
import { ErrorComponent } from './components/error/error.component';

const routes: Routes = [
  { path: '', redirectTo: '/autentication',pathMatch: "full"},
  { path: 'autentication', component: AutenticacionComponent },
  { path:'dash', component:DashboardComponent},
  { path:'**', component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
