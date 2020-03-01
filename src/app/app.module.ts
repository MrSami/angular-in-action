import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MetricComponent } from './components/metric/metric.component';
import { NodesComponent } from './components/nodes/nodes.component';
import { NodesRowComponent } from './components/nodes-row/nodes-row.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MetricComponent,
    NodesComponent,
    NodesRowComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule { }
