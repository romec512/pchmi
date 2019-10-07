import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FirstTestComponent} from './first-test/first-test.component';
import {StartingMonitorComponent} from './starting-monitor/starting-monitor.component';

const routes: Routes = [
  { path: '', component: StartingMonitorComponent},
  { path: 'firstTest', component: FirstTestComponent},
  { path: 'secondTest', component: StartingMonitorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
