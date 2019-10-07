import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartingMonitorComponent } from './starting-monitor/starting-monitor.component';
import { FirstTestComponent } from './first-test/first-test.component';
import {FormsModule} from '@angular/forms';
import { SecondTestComponent } from './second-test/second-test.component';
import { ResultsComponent } from './results/results.component';

@NgModule({
  declarations: [
    AppComponent,
    StartingMonitorComponent,
    FirstTestComponent,
    SecondTestComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
