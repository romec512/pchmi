import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FirstTestComponent} from './first-test/first-test.component';
import {StartingMonitorComponent} from './starting-monitor/starting-monitor.component';
import {SecondTestComponent} from './second-test/second-test.component';
import {ResultsComponent} from './results/results.component';

const routes: Routes = [
  { path: '', component: StartingMonitorComponent},
  { path: 'firstTest', component: FirstTestComponent},
  { path: 'secondTest', component: SecondTestComponent},
  { path: 'results/:results', component: ResultsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
